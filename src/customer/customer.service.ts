import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as bcrypt from "bcrypt";
import { Model } from "mongoose";
import { Language } from "../languages/schemas/language.schema";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { Customer } from "./schemas/customer.schem";
@Injectable()
export class CustomerService {
	constructor(
		@InjectModel(Customer.name) private customerSchema: Model<Customer>,
		@InjectModel(Language.name) private languageSchema: Model<Language>
	) {}
	async create(createCustomerDto: CreateCustomerDto) {
		const { lang_id, password } = createCustomerDto;
		const language = await this.languageSchema.findById(lang_id);
		if (!language) {
			throw new BadRequestException(`$Language not found`);
		}
		const hashshed_password = await bcrypt.hash(password, 7);
		const customer = await this.customerSchema.create({
			...createCustomerDto,
			password: hashshed_password,
		});
		language.customers.push(customer);
		await language.save();
		return customer;
	}

	findAll() {
		return this.customerSchema.find().populate("lang_id");
	}

	findOne(id: string) {
		return this.customerSchema.findById(id).populate("lang_id");
	}
	findByEmail(email: string) {
		return this.customerSchema.findOne({ email });
	}
	update(id: string, updateCustomerDto: UpdateCustomerDto) {
		return this.customerSchema.findByIdAndUpdate(id, updateCustomerDto);
	}

	remove(id: string) {
		return this.customerSchema.findByIdAndDelete(id);
	}
	async updateRefreshToken(refreshToken: string, adminId: string) {
		await this.customerSchema.findByIdAndUpdate(adminId, {
			refresh_token: refreshToken,
		});
	}
}
