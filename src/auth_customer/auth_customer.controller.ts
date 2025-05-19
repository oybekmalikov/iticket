import { Body, Controller, HttpCode, Param, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { SignInAdminDto } from "../auth_admin/dto/signIn-admin.dto";
import { CookieGetter } from "../common/decorators/cookie-getter.decorator";
import { AuthCustomerService } from "./auth_customer.service";

@Controller("auth-customer")
export class AuthCustomerController {
	constructor(private readonly authCustomerService: AuthCustomerService) {}
	@HttpCode(200)
	@Post("sign-in")
	async signIn(
		@Body() signInAdminDto: SignInAdminDto,
		@Res({ passthrough: true }) res: Response
	) {
		return this.authCustomerService.signIn(signInAdminDto, res);
	}
	@HttpCode(200)
	@Post("sign-out")
	async signOut(
		@CookieGetter("refresh_token") refreshToken: string,
		@Res({ passthrough: true }) res: Response
	) {
		return this.authCustomerService.signOut(refreshToken, res);
	}
	@HttpCode(200)
	@Post("update-refresh-token/:id")
	async updateRefreshToken(
		@CookieGetter("refresh_token") refreshToken: string,
		@Res({ passthrough: true }) res: Response,
		@Param("id") id: string
	) {
		return this.authCustomerService.updateRefreshToken(refreshToken, id, res);
	}
}
