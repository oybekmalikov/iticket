import mongoose from "mongoose";

export class CreateCustomerDto {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	phone_number: string;
	birth_date: Date;
	gender:string;
	lang_id: mongoose.Schema.Types.ObjectId;
}
