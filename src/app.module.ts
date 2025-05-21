import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AdminModule } from "./admin/admin.module";
import { AuthAdminModule } from "./auth_admin/auth_admin.module";
import { AuthCustomerModule } from "./auth_customer/auth_customer.module";
import { CustomerModule } from "./customer/customer.module";
import { CustomerAddressModule } from "./customer_address/customer_address.module";
import { LanguagesModule } from "./languages/languages.module";
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { VenueModule } from './venue/venue.module';
import { VenueTypesModule } from './venue_types/venue_types.module';
import { TypesModule } from './types/types.module';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { SeatModule } from './seat/seat.module';
import { SeatTypesModule } from './seat_types/seat_types.module';
import { HumanCategoryModule } from './human_category/human_category.module';
import { EventTypeModule } from './event_type/event_type.module';
import { EventModule } from './event/event.module';
import { TicketStatusModule } from './ticket_status/ticket_status.module';
import { TicketModule } from './ticket/ticket.module';
@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
		MongooseModule.forRoot(process.env.MONGO_URI!),
		AdminModule,
		AuthAdminModule,
		CustomerModule,
		AuthCustomerModule,
		LanguagesModule,
		CustomerAddressModule,
		CustomerAddressModule,
		RegionModule,
		DistrictModule,
		VenueModule,
		VenueTypesModule,
		TypesModule,
		VenuePhotoModule,
		SeatModule,
		SeatTypesModule,
		HumanCategoryModule,
		EventTypeModule,
		EventModule,
		TicketStatusModule,
		TicketModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
