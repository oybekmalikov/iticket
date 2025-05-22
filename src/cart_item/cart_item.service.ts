import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCartItemDto } from "./dto/create-cart_item.dto";
import { UpdateCartItemDto } from "./dto/update-cart_item.dto";
import { CartItem } from "./schemas/cart_item.schema";

@Injectable()
export class CartItemService {
	constructor(
		@InjectModel(CartItem.name) private readonly cartItemSchema: Model<CartItem>
	) {}
	create(createCartItemDto: CreateCartItemDto) {
		return this.cartItemSchema.create(createCartItemDto);
	}

	findAll() {
		return this.cartItemSchema.find();
	}

	findOne(id: number) {
		return this.cartItemSchema.findById(id);
	}

	update(id: number, updateCartItemDto: UpdateCartItemDto) {
		return this.cartItemSchema.findByIdAndUpdate(id, updateCartItemDto);
	}

	remove(id: number) {
		return this.cartItemSchema.findByIdAndDelete(id);
	}
}
