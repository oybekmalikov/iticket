import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
import { PaymentMethod } from "./schemas/payment_method.schema";

@Injectable()
export class PaymentMethodService {
	constructor(
		@InjectModel(PaymentMethod.name)
		private readonly paymentMethod: Model<PaymentMethod>
	) {}
	create(createPaymentMethodDto: CreatePaymentMethodDto) {
		return this.paymentMethod.create(createPaymentMethodDto);
	}

	findAll() {
		return this.paymentMethod.find();
	}

	findOne(id: string) {
		return this.paymentMethod.findById(id);
	}

	update(id: string, updatePaymentMethodDto: UpdatePaymentMethodDto) {
		return this.paymentMethod.findByIdAndUpdate(id, updatePaymentMethodDto);
	}

	remove(id: string) {
		return this.paymentMethod.findByIdAndDelete(id);
	}
}
