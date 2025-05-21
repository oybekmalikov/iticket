import mongoose from "mongoose";

export class CreateTicketDto {
	event_id: mongoose.Schema.Types.ObjectId;
	seat_id: mongoose.Schema.Types.ObjectId;
	price: number;
	service_fee: number;
	status: mongoose.Schema.Types.ObjectId;
	ticket_type: string;
}
