import { Module } from "@nestjs/common";
import { SeatController } from "./seat.controller";
import { SeatService } from "./seat.service";
import { MongooseModule } from '@nestjs/mongoose'
import { Seat, SeatSchema } from './schemas/seat.schema'

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Seat.name,
				schema: SeatSchema,
			},
		]),
	],
	controllers: [SeatController],
	providers: [SeatService],
})
export class SeatModule {}
