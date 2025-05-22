import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CartItemController } from "./cart_item.controller";
import { CartItemService } from "./cart_item.service";
import { CartItem, CartItemSchema } from "./schemas/cart_item.schema";

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: CartItem.name,
				schema: CartItemSchema,
			},
		]),
	],
	controllers: [CartItemController],
	providers: [CartItemService],
})
export class CartItemModule {}
