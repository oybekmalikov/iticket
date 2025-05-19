import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { CustomerAddress } from "../../customer_address/schemas/customer_address.schema";
import { District } from "../../district/schemas/district.schema";

export type RegionDocument = HydratedDocument<Region>;

@Schema({ versionKey: false })
export class Region {
	@Prop()
	name: string;
	@Prop({
		type: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "District",
			},
		],
	})
	districts: District[];
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

export const RegionSchema = SchemaFactory.createForClass(Region);
