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
        const savedVoucher = await this.voucherRepository.save(createVoucherDto);
        return savedVoucher.id;
    }

    async findAll() {
        return await this.voucherRepository.find({ relations: ['voucherDetails', 'voucherDetails.stock', 'customer'] });
    }

    async findOne(id: string) {
        return await this.voucherRepository.findOne(id, { relations: ['voucherDetails', 'voucherDetails.stock', 'customer'] });
    }

    async update(id: string, updateVoucherDto: UpdateVoucherDto) {
        return await this.voucherRepository.update(id, updateVoucherDto);
    }

    async remove(id: string) {
        return await this.voucherRepository.delete(id);
    }
}
