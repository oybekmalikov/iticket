import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { Seat } from "./schemas/seat.schema";

@Injectable()
export class SeatService {
	constructor(
		@InjectModel(Seat.name) private readonly seatSchema: Model<Seat>
	) {}
	create(createSeatDto: CreateSeatDto) {
		return this.seatSchema.create(createSeatDto);
	}

	findAll() {
		return this.seatSchema.find();
	}

	findOne(id: string) {
		return this.seatSchema.findById(id);
	}

	update(id: string, updateSeatDto: UpdateSeatDto) {
		return this.seatSchema.findByIdAndUpdate(id, updateSeatDto);
	}

	remove(id: string) {
		return this.seatSchema.findByIdAndDelete(id);
	}
}
