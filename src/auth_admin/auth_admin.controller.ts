import { Body, Controller, HttpCode, Param, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { CookieGetter } from "../common/decorators/cookie-getter.decorator";
import { AuthAdminService } from "./auth_admin.service";
import { SignInAdminDto } from "./dto/signIn-admin.dto";

@Controller("auth-admin")
export class AuthAdminController {
	constructor(private readonly authAdminService: AuthAdminService) {}
	@HttpCode(200)
	@Post("sign-in")
	async signIn(
		@Body() signInAdminDto: SignInAdminDto,
		@Res({ passthrough: true }) res: Response
	) {
		return this.authAdminService.signIn(signInAdminDto, res);
	}
	@HttpCode(200)
	@Post("sign-out")
	async signOut(
		@CookieGetter("refresh_token") refreshToken: string,
		@Res({ passthrough: true }) res: Response
	) {
		return this.authAdminService.signOut(refreshToken, res);
	}
	@HttpCode(200)
	@Post("update-refresh-token/:id")
	async updateRefreshToken(
		@CookieGetter("refresh_token") refreshToken: string,
		@Res({ passthrough: true }) res: Response,
		@Param("id") id: string
	) {
		return this.authAdminService.updateRefreshToken(refreshToken, id, res);
	}
}
