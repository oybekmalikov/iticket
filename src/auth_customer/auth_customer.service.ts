import { ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { Response } from "express";
import { SignInAdminDto } from "../auth_admin/dto/signIn-admin.dto";
import { CustomerService } from "../customer/customer.service";
import { CustomerDocument } from "../customer/schemas/customer.schem";
@Injectable()
export class AuthCustomerService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly customerService: CustomerService
	) {}
	async generateTokens(customer: CustomerDocument) {
		const payload = {
			id: customer._id,
			role: "customer",
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
		const customer = await this.customerService.findByEmail(signInAdminDto.email);
		if (!customer) {
			throw new UnauthorizedException("Invalid email or password");
		}
		const isValidPassword = await bcrypt.compare(
			signInAdminDto.password,
			customer.password
		);
		if (!isValidPassword) {
			throw new UnauthorizedException("Invalid email or password");
		}
		const { accessToken, refreshToken } = await this.generateTokens(customer);
		res.cookie("refresh_token", refreshToken, {
			maxAge: Number(process.env.COOKIE_TIME),
			httpOnly: true,
		});
		const hashedRefreshToken = await bcrypt.hash(refreshToken, 7);
		customer.refresh_token = hashedRefreshToken;
		await customer.save();
		return {
			message: "Welcome",
			adminId: customer._id,
			accessToken,
		};
	}
	async signOut(refreshToken: string, res: Response) {
		const customerData = await this.jwtService.verify(refreshToken, {
			secret: process.env.REFRESH_TOKEN_KEY,
		});
		if (!customerData) {
			throw new ForbiddenException("Admin not verified");
		}
		await this.customerService.updateRefreshToken(null!,customerData.id);
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
		const admin = await this.customerService.findOne(adminId);
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
		await this.customerService.updateRefreshToken(hashedRefreshToken, adminId);
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
