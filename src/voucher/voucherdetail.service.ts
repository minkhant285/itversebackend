import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVoucherDeatailDto, CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { VoucherEntity } from './entities/voucher.entity';
import { VoucherDetailEntity } from './entities/voucherdetail.entity';

@Injectable()
export class VoucherDetailService {

    constructor(
        @InjectRepository(VoucherDetailEntity)
        private readonly voucherDetailRepository: Repository<VoucherDetailEntity>
    ) { }

    async findAll() {
        return await this.voucherDetailRepository.find({ relations: ['voucher', 'stock'] });
    }

    async create(voucherDetail: CreateVoucherDeatailDto) {
        return await this.voucherDetailRepository.save(voucherDetail);
    }

}
