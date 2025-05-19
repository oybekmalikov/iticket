import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Venue } from "../../venue/schemas/venue.schema";

export type VenuePhotoDocument = HydratedDocument<VenuePhoto>;

@Schema({ versionKey: false })
export class VenuePhoto {
	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "Venue",
	})
	venue_id: Venue;
	@Prop()
	url: string;
}

export const VenuePhotoSchema = SchemaFactory.createForClass(VenuePhoto);
