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
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
