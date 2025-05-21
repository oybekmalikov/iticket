import { Module } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { EventTypeController } from './event_type.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { EventType, EventTypeSchema } from './schemas/event_type.entity'

@Module({
  imports: [
      MongooseModule.forFeature([
        {
          name: EventType.name,
          schema: EventTypeSchema,
        },
      ]),
    ],
  controllers: [EventTypeController],
  providers: [EventTypeService],
})
export class EventTypeModule {}
