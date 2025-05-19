import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { VenuePhoto, VenuePhotoSchema } from "./schemas/venue_photo.schema";
import { VenuePhotoController } from "./venue_photo.controller";
import { VenuePhotoService } from "./venue_photo.service";

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: VenuePhoto.name,
				schema: VenuePhotoSchema,
			},
		]),
	],
	controllers: [VenuePhotoController],
	providers: [VenuePhotoService],
})
export class VenuePhotoModule {}
