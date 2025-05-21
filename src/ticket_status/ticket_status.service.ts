import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTicketStatusDto } from "./dto/create-ticket_status.dto";
import { UpdateTicketStatusDto } from "./dto/update-ticket_status.dto";
import { TicketStatus } from "./schemas/ticket_status.schema";

@Injectable()
export class TicketStatusService {
	constructor(
		@InjectModel(TicketStatus.name)
		private readonly ticketStatusSchema: Model<TicketStatus>
	) {}
	create(createTicketStatusDto: CreateTicketStatusDto) {
		return this.ticketStatusSchema.create(createTicketStatusDto);
	}

	findAll() {
		return this.ticketStatusSchema.find();
	}

	findOne(id: number) {
		return this.ticketStatusSchema.findById(id);
	}

	update(id: number, updateTicketStatusDto: UpdateTicketStatusDto) {
		return this.ticketStatusSchema.findByIdAndUpdate(id, updateTicketStatusDto);
	}

	remove(id: number) {
		return this.ticketStatusSchema.findByIdAndDelete(id);
	}
}
