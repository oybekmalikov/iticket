import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateDeliveryMethodDto } from "./dto/create-delivery_method.dto";
import { UpdateDeliveryMethodDto } from "./dto/update-delivery_method.dto";
import { DeliveryMethod } from "./schemas/delivery_method.schema";

@Injectable()
export class DeliveryMethodService {
	constructor(
		@InjectModel(DeliveryMethod.name)
		private readonly deliveryMethod: Model<DeliveryMethod>
	) {}
	create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
		return this.deliveryMethod.create(createDeliveryMethodDto);
	}

	findAll() {
		return this.deliveryMethod.find();
	}

	findOne(id: string) {
		return this.deliveryMethod.findById(id);
	}

	update(id: string, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
		return this.deliveryMethod.findByIdAndUpdate(id, updateDeliveryMethodDto);
	}

	remove(id: string) {
		return this.deliveryMethod.findByIdAndDelete(id);
	}
}
