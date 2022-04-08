import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    async findOneByEmail(email: string): Promise<CreateUserDto | undefined> {
        return this.userRepository.findOne({ email: email });
    }

    async findOneById(id: string): Promise<UserDto | undefined> {
        return this.userRepository.findOne({ id: id });
    }

    async create(user: CreateUserDto) {
        return await this.userRepository.save(user);
    }

    async findAll() {
        return await this.userRepository.find();
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        return await this.userRepository.update({ id }, updateUserDto);
    }

    async remove(id: string) {
        return await this.userRepository.delete({ id });
    }
}
