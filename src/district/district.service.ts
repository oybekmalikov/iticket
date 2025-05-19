import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Region } from "../region/schemas/region.entity";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { District } from "./schemas/district.schema";

@Injectable()
export class DistrictService {
	constructor(
		@InjectModel(District.name)
		private readonly districtSchema: Model<District>,
		@InjectModel(Region.name) private readonly regionSchema: Model<Region>
	) {}
	async create(createDistrictDto: CreateDistrictDto) {
		const { region_id } = createDistrictDto;
		const region = await this.regionSchema.findById(region_id);
		if (!region) {
			throw new BadRequestException(`$Region not found`);
		}
		const district = await this.districtSchema.create({
			...createDistrictDto,
		});
		region.districts.push(district);
		await region.save();
		return district;
	}

	findAll() {
		return this.districtSchema.find().populate("region_id");
	}

	findOne(id: string) {
		return this.districtSchema.findById(id).populate("region_id");
	}

	update(id: string, updateDistrictDto: UpdateDistrictDto) {
		return this.districtSchema.findByIdAndUpdate(id, updateDistrictDto);
	}

	remove(id: string) {
		return this.districtSchema.findByIdAndUpdate(id);
	}
}
