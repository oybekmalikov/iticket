import {
	BadRequestException,
	ConflictException,
	Injectable,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as bcrypt from "bcrypt";
import { Model } from "mongoose";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin } from "./schemas/admin.schema";
bcrypt;
@Injectable()
export class AdminService {
	constructor(
		@InjectModel(Admin.name) private readonly adminSchema: Model<Admin>
	) {}
	async create(createAdminDto: CreateAdminDto) {
		const { password, confirm_password, email } = createAdminDto;
		const condidate = await this.adminSchema.findOne({ email });
		if (condidate) {
			throw new ConflictException(`${email} already exists`);
		}
		if (password != confirm_password) {
			throw new BadRequestException("Pasword and Confirm password not matched");
		}
		const hashshed_password = await bcrypt.hash(password, 7);
		return this.adminSchema.create({
			...createAdminDto,
			password: hashshed_password,
		});
	}

	findAll() {
		return this.adminSchema.find();
	}

	findOne(id: string) {
		return this.adminSchema.findById(id);
	}
	findByEmail(email: string) {
		return this.adminSchema.findOne({ email });
	}

	update(id: string, updateAdminDto: UpdateAdminDto) {
		return this.adminSchema.findByIdAndUpdate(id, updateAdminDto);
	}

	remove(id: string) {
		return this.adminSchema.findByIdAndDelete(id);
	}
	async updateRefreshToken(refreshToken: string, adminId: string) {
		await this.adminSchema.findByIdAndUpdate(adminId, {
			refresh_token: refreshToken,
		});
	}
}
