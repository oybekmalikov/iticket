import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Customer } from "../customer/schemas/customer.schem";
import { CreateCustomerCardDto } from "./dto/create-customer_card.dto";
import { UpdateCustomerCardDto } from "./dto/update-customer_card.dto";
import { CustomerCard } from "./schemas/customer_card.schemas";

@Injectable()
export class CustomerCardService {
	constructor(
		@InjectModel(CustomerCard.name)
		private readonly customerCardSchema: Model<CustomerCard>,
		@InjectModel(Customer.name)
		private readonly customerSchema: Model<Customer>
	) {}
	async create(createCustomerAddressDto: CreateCustomerCardDto) {
		const { customer_id } = createCustomerAddressDto;
		const customer = await this.customerSchema.findById(customer_id);
		if (!customer) {
			throw new BadRequestException(`$Customer not found`);
		}
		const customer_card = await this.customerCardSchema.create({
			...createCustomerAddressDto,
		});
		customer.customer_cards.push(customer_card);
		await customer.save();
		return customer_card;
	}

	findAll() {
		return this.customerCardSchema.find().populate("customer_id");
	}

	findOne(id: string) {
		return this.customerCardSchema.findById(id).populate("customer_id");
	}

	update(id: string, updateCustomerAddressDto: UpdateCustomerCardDto) {
		return this.customerCardSchema.findByIdAndUpdate(
			id,
			updateCustomerAddressDto
		);
	}

	remove(id: string) {
		return this.customerCardSchema.findByIdAndDelete(id);
	}
}
