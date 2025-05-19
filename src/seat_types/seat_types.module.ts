import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SeatType, SeatTypeSchema } from "./schemas/seat_type.schemas";
import { SeatTypesController } from "./seat_types.controller";
import { SeatTypesService } from "./seat_types.service";

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: SeatType.name,
				schema: SeatTypeSchema,
			},
		]),
	],
	controllers: [SeatTypesController],
	providers: [SeatTypesService],
})
export class SeatTypesModule {}
