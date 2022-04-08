import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, CreateUserIF } from 'src/user/dto/create-user.dto';
import { UserLoginDto } from 'src/user/dto/login.dto';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from '../user/user.service';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService,
    ) { }

    async validateUser(username: string): Promise<any> {
        console.log(username);
        const user = await this.usersService.findOneByEmail(username);
        return user;
        // if (user && user.password === pass) {
        //     const { password, ...result } = user;
        //     return result;
        // }
        return null;
    }

    async login(loginUserData: UserLoginDto) {
        const user = await this.usersService.findOneByEmail(
            loginUserData.email,
        );
        if (user.password === loginUserData.password) {
            delete user.password;
            const jwtObj = JSON.stringify(user);
            return {
                access_token: this.jwtService.sign(JSON.parse(jwtObj), {
                    secret: jwtConstants.secret,
                    expiresIn: '60s',
                }),
            };
        } else {
            return { status: 'not valid' };
        }
    }
}
