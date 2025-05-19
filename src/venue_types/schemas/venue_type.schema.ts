import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type VenueTypeDocument = HydratedDocument<VenueType>;

@Schema({ versionKey: false })
export class VenueType {
	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "Venue",
	})
	venueId: string;
	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "Type",
	})
	typeId: string;
}

export const VenueTypeSchema = SchemaFactory.createForClass(VenueType);
