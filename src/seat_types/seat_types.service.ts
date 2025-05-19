import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { SeatType } from "./schemas/seat_type.schemas";

@Injectable()
export class SeatTypesService {
	constructor(
		@InjectModel(SeatType.name) private readonly seatTypeSchema: Model<SeatType>
	) {}
	create(createSeatTypeDto: CreateSeatTypeDto) {
		return this.seatTypeSchema.create(createSeatTypeDto);
	}

	findAll() {
		return this.seatTypeSchema.find();
	}

	findOne(id: string) {
		return this.seatTypeSchema.findById(id);
	}

	update(id: string, updateSeatTypeDto: UpdateSeatTypeDto) {
		return this.seatTypeSchema.findByIdAndUpdate(id, updateSeatTypeDto);
	}

	remove(id: string) {
		return this.seatTypeSchema.findByIdAndDelete(id);
	}
}
