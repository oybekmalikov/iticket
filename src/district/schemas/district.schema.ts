import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { CustomerAddress } from "../../customer_address/schemas/customer_address.schema";
import { Region } from "../../region/schemas/region.entity";

export type DistrictDocument = HydratedDocument<District>;

@Schema({ versionKey: false })
export class District {
	@Prop()
	name: string;
	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "Region",
	})
	region_id: Region;
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

export const DistrictSchema = SchemaFactory.createForClass(District);
