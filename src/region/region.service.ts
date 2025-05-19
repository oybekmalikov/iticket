import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
import { Region } from "./schemas/region.entity";

@Injectable()
export class RegionService {
	constructor(
		@InjectModel(Region.name) private readonly regionSchema: Model<Region>
	) {}
	create(createRegionDto: CreateRegionDto) {
		return this.regionSchema.create(createRegionDto);
	}

	findAll() {
		return this.regionSchema.find().populate("districts");
	}

	findOne(id: string) {
		return this.regionSchema.findById(id).populate("districts");
	}

	update(id: string, updateRegionDto: UpdateRegionDto) {
		return this.regionSchema.findByIdAndUpdate(id, updateRegionDto);
	}

	remove(id: string) {
		return this.regionSchema.findByIdAndDelete(id);
	}
}
