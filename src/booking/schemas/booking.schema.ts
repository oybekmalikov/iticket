import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type BookingDocument = HydratedDocument<Booking>;

@Schema({ versionKey: false })
export class Booking {
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Cart" })
	cart_id: string;
	@Prop()
	createdAt: string;
	@Prop()
	finidhedAt: string;
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: "PaymentMethod" })
	payment_method_id: string;
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: "DeliveryMethod" })
	delivery_method_id: string;
	@Prop()
	discountCupon: string;
	@Prop()
	status: boolean;
}
export const BookingSchema = SchemaFactory.createForClass(Booking);
