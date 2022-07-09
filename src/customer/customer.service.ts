import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/customer/entities/customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {

    constructor(
        @InjectRepository(CustomerEntity)
        private readonly customerRepository: Repository<CustomerEntity>,
    ) { }

    async create(createCustomerDto: CreateCustomerDto) {
        console.log(createCustomerDto)
        return await this.customerRepository.save(createCustomerDto);
    }

    async findAll() {
        return await this.customerRepository.find({ relations: ['packages'] });
    }

    findOne(id: number) {
        return `This action returns a #${id} customer`;
    }

    update(id: number, updateCustomerDto: UpdateCustomerDto) {
        return `This action updates a #${id} customer`;
    }

    async remove(id: string) {
        return await this.customerRepository.delete(id);
    }
}
