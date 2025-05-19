import mongoose from "mongoose";

export class CreateCustomerAddressDto {
	customer_id: mongoose.Schema.Types.ObjectId;
	name: string;
	region_id: mongoose.Schema.Types.ObjectId;
	district_id: mongoose.Schema.Types.ObjectId;
	street: string;
	house: string;
	flat: number;
	location: string;
	post_index: string;
	info: string;
}
