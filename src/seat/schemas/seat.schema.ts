import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type SeatDocument = HydratedDocument<Seat>;

@Schema({ versionKey: false })
export class Seat {
	@Prop()
	sector: number;
	@Prop()
	raw_number: number;
	@Prop()
	number: number;
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Venue" })
	venue_id: string;
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: "SeatType" })
	seat_type_id: string;
	@Prop()
	location_in_schema: string;
}

export const SeatSchema = SchemaFactory.createForClass(Seat);
