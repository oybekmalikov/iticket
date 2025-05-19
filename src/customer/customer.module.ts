import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Language, LanguageSchema } from "../languages/schemas/language.schema";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "./customer.service";
import { Customer, CustomerSchema } from "./schemas/customer.schem";

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Customer.name,
				schema: CustomerSchema,
			},
			{
				name: Language.name,
				schema: LanguageSchema,
			},
		]),
	],
	controllers: [CustomerController],
	providers: [CustomerService],
	exports: [CustomerService],
})
export class CustomerModule {}
