import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Customer } from "../../customer/schemas/customer.schem";
import { Region } from '../../region/schemas/region.entity'
import { District } from '../../district/schemas/district.schema'

export type CustomerAddressDocument = HydratedDocument<CustomerAddress>;

@Schema({ versionKey: false })
export class CustomerAddress {
	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "Customer",
	})
	customer_id: Customer;
	@Prop()
	name: string;
	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "Region",
	})
	region_id: Region;
	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "District",
	})
	district_id: District;
	@Prop()
	street: string;
	@Prop()
	house: string;
	@Prop()
	flat: number;
	@Prop()
	location: string;
	@Prop()
	post_index: string;
	@Prop()
	info: string;
}

export const CustomerAddressSchema = SchemaFactory.createForClass(CustomerAddress);
