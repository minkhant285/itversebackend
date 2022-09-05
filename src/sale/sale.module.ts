import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleEntity } from './entities/sale.entity';
import { VoucherEntity } from 'src/voucher/entities/voucher.entity';
import { VoucherService } from 'src/voucher/voucher.service';

@Module({
    imports: [TypeOrmModule.forFeature([SaleEntity, VoucherEntity])],
    controllers: [SaleController],
    providers: [SaleService, VoucherService]
})
export class SaleModule { }
