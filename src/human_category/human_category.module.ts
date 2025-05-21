import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { HumanCategoryController } from "./human_category.controller";
import { HumanCategoryService } from "./human_category.service";
import {
	HumanCategory,
	HumanCategorySchema,
} from "./schemas/human_category.schema";

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: HumanCategory.name,
				schema: HumanCategorySchema,
			},
		]),
	],
	controllers: [HumanCategoryController],
	providers: [HumanCategoryService],
})
export class HumanCategoryModule {}
