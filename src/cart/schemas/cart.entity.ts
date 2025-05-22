import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type CartDocument = HydratedDocument<Cart>;

@Schema({ versionKey: false })
export class Cart {
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Customer" })
	customer_id: string;
	@Prop()
	createdAt: string;
	@Prop()
	finidhedAt: string;
	@Prop()
	status: string;
}
export const CartSchema = SchemaFactory.createForClass(Cart);
