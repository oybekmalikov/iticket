import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type CartItemDocument = HydratedDocument<CartItem>;

@Schema({ versionKey: false })
export class CartItem {
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Ticket" })
	tucket_id: string;
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Cart" })
	cart_id: string;
}
export const CartItemSchema = SchemaFactory.createForClass(CartItem);
