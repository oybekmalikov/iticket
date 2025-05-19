import {
	ForbiddenException,
	Injectable,
	NotFoundException,
	UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { Response } from "express";
import { AdminService } from "../admin/admin.service";
import { AdminDocument } from "../admin/schemas/admin.schema";
import { SignInAdminDto } from "./dto/signIn-admin.dto";
@Injectable()
export class AuthAdminService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly adminService: AdminService
	) {}
	async generateTokens(admin: AdminDocument) {
		const payload = {
			id: admin._id,
			is_active: admin.is_active,
			is_creator: admin.is_creator,
		};
		const [accessToken, refreshToken] = await Promise.all([
			this.jwtService.signAsync(payload, {
				secret: process.env.ACCESS_TOKEN_KEY,
				expiresIn: process.env.ACCESS_TOKEN_TIME,
			}),
			this.jwtService.signAsync(payload, {
				secret: process.env.REFRESH_TOKEN_KEY,
				expiresIn: process.env.REFRESH_TOKEN_TIME,
			}),
		]);
		return {
			accessToken,
			refreshToken,
		};
	}
	async signIn(signInAdminDto: SignInAdminDto, res: Response) {
		const admin = await this.adminService.findByEmail(signInAdminDto.email);
		if (!admin) {
			throw new UnauthorizedException("Invalid email or password");
		}
		const isValidPassword = await bcrypt.compare(
			signInAdminDto.password,
			admin.password
		);
		if (!isValidPassword) {
			throw new UnauthorizedException("Invalid email or password");
		}
		const { accessToken, refreshToken } = await this.generateTokens(admin);
		res.cookie("refresh_token", refreshToken, {
			maxAge: Number(process.env.COOKIE_TIME),
			httpOnly: true,
		});
		const hashedRefreshToken = await bcrypt.hash(refreshToken, 7);
		admin.refresh_token = hashedRefreshToken;
		await admin.save();
		return {
			message: "Welcome",
			adminId: admin._id,
			accessToken,
		};
	}
	async signOut(refreshToken: string, res: Response) {
		const adminData = await this.jwtService.verify(refreshToken, {
			secret: process.env.REFRESH_TOKEN_KEY,
		});
		if (!adminData) {
			throw new ForbiddenException("Admin not verified");
		}
		await this.adminService.updateRefreshToken(null!,adminData.id);
		res.clearCookie("refresh_token");
		return {
			message: "Admin logged out",
		};
	}
	async updateRefreshToken(
		refreshTokenfrom: string,
		adminId: string,
		res: Response
	) {
		const decodedDate = await this.jwtService.decode(refreshTokenfrom);
		if (adminId != decodedDate["id"]) {
			throw new ForbiddenException("Not Allowed!");
		}
		const admin = await this.adminService.findOne(adminId);
		if (!admin || !admin.refresh_token) {
			throw new NotFoundException("Admin not found");
		}
		const isTokensMatch = await bcrypt.compare(
			refreshTokenfrom,
			admin.refresh_token
		);
		if (!isTokensMatch) {
			throw new ForbiddenException("Forbidden!");
		}
		const { accessToken, refreshToken } = await this.generateTokens(admin);
		const hashedRefreshToken = await bcrypt.hash(refreshToken, 7);
		await this.adminService.updateRefreshToken(hashedRefreshToken, adminId);
		res.cookie("refresh_token", refreshToken, {
			httpOnly: true,
			maxAge: Number(process.env.COOKIE_TIME),
		});
		return {
			message: "Token updated",
			id: adminId,
			accessToken,
		};
	}
}
