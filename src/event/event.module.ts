import { Module } from "@nestjs/common";
import { EventController } from "./event.controller";
import { EventService } from "./event.service";
import { MongooseModule } from '@nestjs/mongoose'
import { Event, EventSchema } from './schemas/event.schema'

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Event.name,
				schema: EventSchema,
			},
		]),
	],
	controllers: [EventController],
	providers: [EventService],
})
export class EventModule {}
