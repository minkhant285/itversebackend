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


    @Get()
    getHello(@Request() req): string {
        console.log(req.user)
        return this.appService.getHello();
    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req): Promise<any> {
        return req.user;
    }

    // @UseGuards(LocalAuthGuard)
    // @Post('auth/register')
    // async createUser(@Request() req) {
    //     return this.authService.login(req.user);
    // }
}
