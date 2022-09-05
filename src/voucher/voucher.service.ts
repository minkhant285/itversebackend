import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { VoucherEntity } from './entities/voucher.entity';

@Injectable()
export class VoucherService {

    constructor(
        @InjectRepository(VoucherEntity)
        private readonly voucherRepository: Repository<VoucherEntity>
    ) { }


    async create(createVoucherDto: CreateVoucherDto) {
        return await this.voucherRepository.save(createVoucherDto);
    }

    async findAll() {
        return await this.voucherRepository.find({ relations: ['sale'] });
    }

    findOne(id: number) {
        return `This action returns a #${id} voucher`;
    }

    update(id: number, updateVoucherDto: UpdateVoucherDto) {
        return `This action updates a #${id} voucher`;
    }

    remove(id: number) {
        return `This action removes a #${id} voucher`;
    }
}
