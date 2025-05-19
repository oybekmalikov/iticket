import mongoose from "mongoose";

export class CreateCustomerCardDto {
	customer_id: mongoose.Schema.Types.ObjectId;
	name: string;
	phone: string;
	number: string;
	year: string;
	month: string;
	is_active: boolean;
	is_main: boolean;
}
