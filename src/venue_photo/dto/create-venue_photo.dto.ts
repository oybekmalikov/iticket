import mongoose from "mongoose";

export class CreateVenuePhotoDto {
	venue_id: mongoose.Schema.Types.ObjectId;
	url: string;
}
