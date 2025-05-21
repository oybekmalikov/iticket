import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {
	TicketStatus,
	TicketStatusSchema,
} from "./schemas/ticket_status.schema";
import { TicketStatusController } from "./ticket_status.controller";
import { TicketStatusService } from "./ticket_status.service";

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: TicketStatus.name,
				schema: TicketStatusSchema,
			},
		]),
	],
	controllers: [TicketStatusController],
	providers: [TicketStatusService],
})
export class TicketStatusModule {}
