import { Module } from "@nestjs/common";
import { RegionController } from "./region.controller";
import { RegionService } from "./region.service";
import { Region } from "./schemas/region.entity";
import { MongooseModule } from '@nestjs/mongoose'

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
})
export class RegionModule {}
