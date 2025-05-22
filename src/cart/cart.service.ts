import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Cart } from "./schemas/cart.entity";

@Injectable()
export class CartService {
	constructor(
		@InjectModel(Cart.name) private readonly cartSchema: Model<Cart>
	) {}
	create(createCartDto: CreateCartDto) {
		return this.cartSchema.create(createCartDto);
	}

	findAll() {
		return this.cartSchema.find();
	}

	findOne(id: string) {
		return this.cartSchema.findById(id);
	}

	update(id: string, updateCartDto: UpdateCartDto) {
		return this.cartSchema.findByIdAndUpdate(id, updateCartDto);
	}

	remove(id: string) {
		return this.cartSchema.findByIdAndUpdate(id);
	}
}
