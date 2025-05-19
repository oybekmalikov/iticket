import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateLanguageDto } from "./dto/create-language.dto";
import { UpdateLanguageDto } from "./dto/update-language.dto";
import { Language } from "./schemas/language.schema";

@Injectable()
export class LanguagesService {
	constructor(
		@InjectModel(Language.name) private languageSchema: Model<Language>
	) {}
	create(createLanguageDto: CreateLanguageDto) {
		return this.languageSchema.create(createLanguageDto);
	}

	findAll() {
		return this.languageSchema.find().populate("customers");
	}

	findOne(id: string) {
		return this.languageSchema.findById(id).populate("customers");
	}

	update(id: string, updateLanguageDto: UpdateLanguageDto) {
		return this.languageSchema.findByIdAndUpdate(id, updateLanguageDto);
	}

	remove(id: string) {
		return this.languageSchema.findByIdAndDelete(id);
	}
}
