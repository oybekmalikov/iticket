import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Customer } from "../../customer/schemas/customer.schem";

export type LanguageDocument = HydratedDocument<Language>;

@Schema({ versionKey: false })
export class Language {
	@Prop()
	name: string;
	@Prop()
	description: string;
	@Prop({
		type: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Customer",
			},
		],
	})
	customers: Customer[];
}
export const LanguageSchema = SchemaFactory.createForClass(Language);
