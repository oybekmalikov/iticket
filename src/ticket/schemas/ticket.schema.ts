import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type TicketDocument = HydratedDocument<Ticket>;

@Schema({ versionKey: false })
export class Ticket {
	@Prop({ type: mongoose.Schema.Types.ObjectId })
	event_id: string;
	@Prop({ type: mongoose.Schema.Types.ObjectId })
	seat_id: string;
	@Prop()
	price: number;
	@Prop()
	service_fee: number;
	@Prop({ type: mongoose.Schema.Types.ObjectId })
	status: string;
	@Prop()
	ticket_type: string;
}
export const TicketSchema = SchemaFactory.createForClass(Ticket);
