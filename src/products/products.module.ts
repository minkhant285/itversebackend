import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockEntity } from './entities/stock.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
    imports: [TypeOrmModule.forFeature([StockEntity]),
    MulterModule.register({ dest: './product_photos' }),
    ],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule { }
