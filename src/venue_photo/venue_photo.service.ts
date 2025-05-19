import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { VenuePhoto } from "./schemas/venue_photo.schema";

@Injectable()
export class VenuePhotoService {
	constructor(
		@InjectModel(VenuePhoto.name)
		private readonly venuePhotoSchema: Model<VenuePhoto>
	) {}
	create(createVenuePhotoDto: CreateVenuePhotoDto) {
		return this.venuePhotoSchema.create(createVenuePhotoDto);
	}

	findAll() {
		return this.venuePhotoSchema.find();
	}

	findOne(id: string) {
		return this.venuePhotoSchema.findById(id);
	}

	update(id: string, updateVenuePhotoDto: UpdateVenuePhotoDto) {
		return this.venuePhotoSchema.findByIdAndUpdate(id, updateVenuePhotoDto);
	}

	remove(id: string) {
		return this.venuePhotoSchema.findByIdAndDelete(id);
	}
}
