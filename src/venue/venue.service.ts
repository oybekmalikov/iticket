import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DistrictService } from "../district/district.service";
import { RegionService } from "../region/region.service";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { Venue } from "./schemas/venue.schema";

@Injectable()
export class VenueService {
	constructor(
		@InjectModel(Venue.name) private venueSchema: Model<Venue>,
		private readonly districtService: DistrictService,
		private readonly regionService: RegionService
	) {}
	create(createVenueDto: CreateVenueDto) {
		return this.venueSchema.create(createVenueDto);
	}

	async findAll() {
		return this.venueSchema.find();
	}

	findOne(id: string) {
		return this.venueSchema.findById(id);
	}

	update(id: string, updateVenueDto: UpdateVenueDto) {
		return this.venueSchema.findByIdAndUpdate(id, updateVenueDto);
	}

	remove(id: string) {
		return this.venueSchema.findByIdAndDelete(id);
	}
}
