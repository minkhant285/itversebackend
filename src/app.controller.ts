import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UserLoginDto } from './user/dto/login.dto';
import { UserDto } from './user/dto/user.dto';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private authService: AuthService,
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    // @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Body() req: UserLoginDto): Promise<any> {
        return await this.authService.login(req);
    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/register')
    async createUser(@Request() req) {
        return this.authService.login(req.user);
    }
}
