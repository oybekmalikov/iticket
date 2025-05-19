import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RegionController } from "./region.controller";
import { RegionService } from "./region.service";
import { Region } from "./schemas/region.entity";

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Region.name,
				schema: Region,
			},
		]),
	],
	controllers: [RegionController],
	providers: [RegionService],
	exports: [RegionService],
})
export class RegionModule {}
