import { Module } from '@nestjs/common';
import { TransitionService } from './transition.service';
import { TransitionController } from './transition.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceEntity } from 'src/products/entities/invoice.entity';
import { SaleEntity } from 'src/products/entities/sale.entity';

@Module({
    imports: [TypeOrmModule.forFeature([SaleEntity, InvoiceEntity])],
    controllers: [TransitionController],
    providers: [TransitionService],
})
export class TransitionModule { }
