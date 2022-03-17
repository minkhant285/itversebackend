import { Module } from '@nestjs/common';
import { TransitionService } from './transition.service';
import { TransitionController } from './transition.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleEntity } from 'src/models/sale.entity';
import { InvoiceEntity } from 'src/models/invoice.entity';

@Module({
    imports: [TypeOrmModule.forFeature([SaleEntity, InvoiceEntity])],
    controllers: [TransitionController],
    providers: [TransitionService],
})
export class TransitionModule {}
