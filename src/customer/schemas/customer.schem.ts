import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { CustomerAddress } from "../../customer_address/schemas/customer_address.schema";
import { CustomerCard } from "../../customer_cards/schemas/customer_card.schemas";
import { Language } from "../../languages/schemas/language.schema";

export type CustomerDocument = HydratedDocument<Customer>;

@Schema({ versionKey: false })
export class Customer {
	@Prop()
	first_name: string;
	@Prop()
	last_name: string;
	@Prop({ required: true, unique: true })
	email: string;
	@Prop()
	password: string;
	@Prop()
	phone_number: string;
	@Prop()
	birth_date: Date;
	@Prop()
	gender: string;
	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "Language",
	})
	lang_id: Language;
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

export const CustomerSchema = SchemaFactory.createForClass(Customer);
