import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceEntity } from './models/invoice.entity';
import { SaleEntity } from './models/sale.entity';
import { StockEntity } from './models/stock.entity';
import { ProductsModule } from './products/products.module';
import { TransitionModule } from './transition/transition.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: parseInt(<string>process.env.POSTGRES_PORT),
            database: process.env.POSTGRES_DATABASE,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            autoLoadEntities: true,
            synchronize: true,
            ssl: true,
        }),
        TypeOrmModule.forFeature([StockEntity, SaleEntity, InvoiceEntity]),
        ProductsModule,
        TransitionModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
