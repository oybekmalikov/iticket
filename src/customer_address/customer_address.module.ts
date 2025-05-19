import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Customer, CustomerSchema } from "../customer/schemas/customer.schem";
import { District, DistrictSchema } from "../district/schemas/district.schema";
import { Region, RegionSchema } from "../region/schemas/region.entity";
import { CustomerAddressController } from "./customer_address.controller";
import { CustomerAddressService } from "./customer_address.service";
import {
	CustomerAddress,
	CustomerAddressSchema,
} from "./schemas/customer_address.schema";

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: CustomerAddress.name,
				schema: CustomerAddressSchema,
			},
			{
				name: Customer.name,
				schema: CustomerSchema,
			},
			{
				name: Region.name,
				schema: RegionSchema,
			},
			{
				name: District.name,
				schema: DistrictSchema,
			},
		]),
	],
	controllers: [CustomerAddressController],
	providers: [CustomerAddressService],
})
export class CustomerAddressModule {}
