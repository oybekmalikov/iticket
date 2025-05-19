import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from "@nestjs/common";
import { CustomerCardService } from "./customer_card.service";
import { CreateCustomerCardDto } from "./dto/create-customer_card.dto";
import { UpdateCustomerCardDto } from "./dto/update-customer_card.dto";

@Controller("customer-card")
export class CustomerCardController {
	constructor(private readonly customerAddressService: CustomerCardService) {}

	@Post()
	create(@Body() createCustomerAddressDto: CreateCustomerCardDto) {
		return this.customerAddressService.create(createCustomerAddressDto);
	}

	@Get()
	findAll() {
		return this.customerAddressService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.customerAddressService.findOne(id);
	}

	@Patch(":id")
	update(
		@Param("id") id: string,
		@Body() updateCustomerAddressDto: UpdateCustomerCardDto
	) {
		return this.customerAddressService.update(id, updateCustomerAddressDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.customerAddressService.remove(id);
	}
}
