import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { SaleEntity } from './entities/sale.entity';
import { v4 as uuidv4 } from 'uuid';
import { VoucherEntity } from 'src/voucher/entities/voucher.entity';
import { VoucherService } from 'src/voucher/voucher.service';

@Injectable()
export class SaleService {

    constructor(
        @InjectRepository(SaleEntity)
        private readonly saleRepository: Repository<SaleEntity>,

        private readonly voucherService: VoucherService
    ) { }

    async create(createSaleDto: CreateSaleDto) {

        createSaleDto['voucher'] = await this.voucherService.create({
            customer: { id: "785d46a3-02a6-463e-97d0-0cc29b592cbb" },
            discount: 1,
            status: 'not ready',
            delivery_fee: 2500,
            payment_methods: {},
            sale: []
        })
        return await this.saleRepository.save(createSaleDto);
    }

    async findAll() {
        return await this.saleRepository.find({ loadRelationIds: true });
    }

    findOne(id: number) {
        return `This action returns a #${id} sale`;
    }

    update(id: number, updateSaleDto: UpdateSaleDto) {
        return `This action updates a #${id} sale`;
    }

    remove(id: number) {
        return `This action removes a #${id} sale`;
    }
}
