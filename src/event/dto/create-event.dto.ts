import mongoose from "mongoose";

export class CreateEventDto {
	name: string;
	photo: string;
	start_date: Date;
	start_time: string;
	finish_date: Date;
	finish_time: string;
	info: string;
	event_type_id: mongoose.Schema.Types.ObjectId;
	human_category_id: mongoose.Schema.Types.ObjectId;
	venue_id: mongoose.Schema.Types.ObjectId;
	lang_id: mongoose.Schema.Types.ObjectId;
	relase_date: Date;
}
