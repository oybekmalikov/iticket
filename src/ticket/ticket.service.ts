import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { Ticket } from "./schemas/ticket.schema";

@Injectable()
export class TicketService {
	constructor(
		@InjectModel(Ticket.name) private readonly ticketSchema: Model<Ticket>
	) {}
	create(createTicketDto: CreateTicketDto) {
		return this.ticketSchema.create(createTicketDto);
	}

	findAll() {
		return this.ticketSchema.find();
	}

	findOne(id: string) {
		return this.ticketSchema.findById(id);
	}

	update(id: string, updateTicketDto: UpdateTicketDto) {
		return this.ticketSchema.findByIdAndUpdate(id, updateTicketDto);
	}

	remove(id: string) {
		return this.ticketSchema.findByIdAndDelete(id);
	}
}
