import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type DeliveryMethodDocument = HydratedDocument<DeliveryMethod>;

@Schema({ versionKey: false })
export class DeliveryMethod {
	@Prop()
	name: string;
}
export const DeliveryMethodSchema =
	SchemaFactory.createForClass(DeliveryMethod);
