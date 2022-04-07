import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockEntity } from './entities/stock.entity';

@Module({
    imports: [TypeOrmModule.forFeature([StockEntity])],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule { }
