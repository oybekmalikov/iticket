import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from "@nestjs/common";
import { CustomerAddressService } from "./customer_address.service";
import { CreateCustomerAddressDto } from "./dto/create-customer_address.dto";
import { UpdateCustomerAddressDto } from "./dto/update-customer_address.dto";

@Controller("customer-address")
export class CustomerAddressController {
	constructor(private readonly customerCardService: CustomerAddressService) {}

	@Post()
	create(@Body() createCustomerCardDto: CreateCustomerAddressDto) {
		return this.customerCardService.create(createCustomerCardDto);
	}

	@Get()
	findAll() {
		return this.customerCardService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.customerCardService.findOne(id);
	}

	@Patch(":id")
	update(
		@Param("id") id: string,
		@Body() updateCustomerCardDto: UpdateCustomerAddressDto
	) {
		return this.customerCardService.update(id, updateCustomerCardDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.customerCardService.remove(id);
	}
}
