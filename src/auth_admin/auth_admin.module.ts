import { JwtModule } from "@nestjs/jwt";
import { Module } from "@nestjs/common";
import { AdminModule } from "../admin/admin.module";
import { AuthAdminController } from "./auth_admin.controller";
import { AuthAdminService } from "./auth_admin.service";
@Module({
imports: [JwtModule.register({ global: true }), AdminModule],

	controllers: [AuthAdminController],
	providers: [AuthAdminService],
	exports: [],
})
export class AuthAdminModule {}
