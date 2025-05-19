import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { VenueType, VenueTypeSchema } from "./schemas/venue_type.schema";
import { VenueTypesController } from "./venue_types.controller";
import { VenueTypesService } from "./venue_types.service";

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: VenueType.name,
				schema: VenueTypeSchema,
			},
		]),
	],
	controllers: [VenueTypesController],
	providers: [VenueTypesService],
})
export class VenueTypesModule {}
