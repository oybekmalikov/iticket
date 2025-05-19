import mongoose from "mongoose";

export class CreateVenueDto {
	name: string;
	address: string;
	location: string;
	site: string;
	phone_number: string;
	schema: string;
	district_id: mongoose.Schema.Types.ObjectId;
	region_id: mongoose.Schema.Types.ObjectId;
}
