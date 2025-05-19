import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { VenueType } from "./schemas/venue_type.schema";

@Injectable()
export class VenueTypesService {
	constructor(
		@InjectModel(VenueType.name)
		private readonly venueTypeSchema: Model<VenueType>
	) {}
	create(createVenueTypeDto: CreateVenueTypeDto) {
		return this.venueTypeSchema.create(createVenueTypeDto);
	}

	findAll() {
		return this.venueTypeSchema.find();
	}

	findOne(id: string) {
		return this.venueTypeSchema.findById(id);
	}

	update(id: string, updateVenueTypeDto: UpdateVenueTypeDto) {
		return this.venueTypeSchema.findByIdAndUpdate(id, updateVenueTypeDto);
	}

	remove(id: string) {
		return this.venueTypeSchema.findByIdAndDelete(id);
	}
}
