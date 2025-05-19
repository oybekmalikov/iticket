import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Customer } from "../customer/schemas/customer.schem";
import { District } from "../district/schemas/district.schema";
import { Region } from "../region/schemas/region.entity";
import { CreateCustomerAddressDto } from "./dto/create-customer_address.dto";
import { UpdateCustomerAddressDto } from "./dto/update-customer_address.dto";
import { CustomerAddress } from "./schemas/customer_address.schema";

@Injectable()
export class CustomerAddressService {
	constructor(
		@InjectModel(CustomerAddress.name)
		private readonly customerAddressSchema: Model<CustomerAddress>,
		@InjectModel(Customer.name)
		private readonly customerSchema: Model<Customer>,
		@InjectModel(Region.name) private readonly regionSchema: Model<Region>,
		@InjectModel(District.name) private readonly districtSchema: Model<District>
	) {}
	async create(createCustomerAddressDto: CreateCustomerAddressDto) {
		const { region_id, district_id, customer_id } = createCustomerAddressDto;
		const customer = await this.customerSchema.findById(customer_id);
		if (!customer) {
			throw new BadRequestException(`Customer not found`);
		}
		const region = await this.regionSchema.findById(region_id);
		if (!region) {
			throw new BadRequestException(`Region not found`);
		}
		const district = await this.districtSchema.findById(district_id);
		if (!district) {
			throw new BadRequestException(`$District not found`);
		}
		const customer_address = await this.customerAddressSchema.create({
			...createCustomerAddressDto,
		});
		customer.customer_addresses.push(customer_address);
		await customer.save();
		return customer_address;
	}

	findAll() {
		return this.customerAddressSchema.find().populate;
	}

	findOne(id: string) {
		return this.customerAddressSchema.findById(id).populate;
	}

	update(id: string, updateCustomerCardDto: UpdateCustomerAddressDto) {
		return this.customerAddressSchema.findByIdAndUpdate(
			id,
			updateCustomerCardDto
		);
	}

	remove(id: string) {
		return this.customerAddressSchema.findByIdAndDelete(id);
	}
}
