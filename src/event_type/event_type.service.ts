import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";
import { EventType } from "./schemas/event_type.entity";

@Injectable()
export class EventTypeService {
	constructor(
		@InjectModel(EventType.name)
		private readonly eventTypeSchema: Model<EventType>
	) {}
	create(createEventTypeDto: CreateEventTypeDto) {
		return this.eventTypeSchema.create(createEventTypeDto);
	}

	findAll() {
		return this.eventTypeSchema.find();
	}

	findOne(id: number) {
		return this.eventTypeSchema.findById(id);
	}

	update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
		return this.eventTypeSchema.findByIdAndUpdate(id, updateEventTypeDto);
	}

	remove(id: number) {
		return this.eventTypeSchema.findByIdAndDelete(id);
	}
}
