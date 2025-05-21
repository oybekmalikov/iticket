import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type EventTypeDocument = HydratedDocument<EventType>;

@Schema({ versionKey: false })
export class EventType {
	@Prop()
	name: string;
	@Prop()
	parent_event_type_id: number;
}
export const EventTypeSchema = SchemaFactory.createForClass(EventType);
