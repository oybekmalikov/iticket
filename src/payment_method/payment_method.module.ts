import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PaymentMethodController } from "./payment_method.controller";
import { PaymentMethodService } from "./payment_method.service";
import {
	PaymentMethod,
	PaymentMethodSchema,
} from "./schemas/payment_method.schema";

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: PaymentMethod.name,
				schema: PaymentMethodSchema,
			},
		]),
	],
	controllers: [PaymentMethodController],
	providers: [PaymentMethodService],
})
export class PaymentMethodModule {}
