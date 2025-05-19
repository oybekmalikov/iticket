import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { CustomerAddress } from "../../customer_address/schemas/customer_address.schema";
import { CustomerCard } from "../../customer_cards/schemas/customer_card.schemas";
import { District } from "../../district/schemas/district.schema";
import { Region } from "../../region/schemas/region.entity";

export type VenueDocument = HydratedDocument<Venue>;

@Schema({ versionKey: false })
export class Venue {
	@Prop()
	name: string;
	@Prop()
	address: string;
	@Prop()
	location: string;
	@Prop()
	site: string;
	@Prop()
	phone_number: string;
	@Prop()
	schema: string;
	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "District",
	})
	district_id: District;
	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "Region",
	})
	region_id: Region;
	@Prop()
	refresh_token: string;
	@Prop({
		type: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "CustomerCard",
			},
		],
	})
	customer_cards: CustomerCard[];
	@Prop({
		type: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "CustomerAddress",
			},
		],
	})
	customer_addresses: CustomerAddress[];
}

export const VenueSchema = SchemaFactory.createForClass(Venue);
