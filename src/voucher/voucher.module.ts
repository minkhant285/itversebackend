import { Module } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { VoucherController } from './voucher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoucherEntity } from './entities/voucher.entity';
import { VoucherDetailEntity } from './entities/voucherdetail.entity';
import { VoucherDetailService } from './voucherdetail.service';
import { VoucherDetailController } from './voucherdetail.controller';

@Module({
    imports: [TypeOrmModule.forFeature([VoucherEntity, VoucherDetailEntity])],
    controllers: [VoucherController, VoucherDetailController],
    providers: [VoucherService, VoucherDetailService]
})
export class VoucherModule { }
