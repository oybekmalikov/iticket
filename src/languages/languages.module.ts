import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LanguagesController } from "./languages.controller";
import { LanguagesService } from "./languages.service";
import { Language, LanguageSchema } from "./schemas/language.schema";

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Language.name,
				schema: LanguageSchema,
			},
		]),
	],
	controllers: [LanguagesController],
	providers: [LanguagesService],
})
export class LanguagesModule {}
