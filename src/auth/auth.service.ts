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



    async ValidateUser(email: string, password: string) {
        const user = await this.usersService.findOneByEmail(email);
        if (user.password === password) {
            delete user.password;
            return {
                access_token: this.jwtService.sign(
                    JSON.parse(JSON.stringify(user)),
                ),
            };
        } else {
            return null;
        }
    }

}
