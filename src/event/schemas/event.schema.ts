import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type EventDocument = HydratedDocument<Event>;

@Schema({ versionKey: false })
export class Event {
	@Prop()
	name: string;
	@Prop()
	photo: string;
	@Prop()
	start_date: Date;
	@Prop()
	start_time: string;
	@Prop()
	finish_date: Date;
	@Prop()
	finish_time: string;
	@Prop()
	info: string;
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: "EventType" })
	event_type_id: string;
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: "HumanCategory" })
	human_category_id: string;
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Venue" })
	venue_id: string;
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Languages" })
	lang_id: string;
	@Prop()
	relase_date: Date;
}
export const EventSchema = SchemaFactory.createForClass(Event);
