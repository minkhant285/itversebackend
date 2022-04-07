import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceEntity } from './products/entities/invoice.entity';
import { SaleEntity } from './products/entities/sale.entity';
import { StockEntity } from './products/entities/stock.entity';
import { ProductsModule } from './products/products.module';
import { TransitionModule } from './transition/transition.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env.development', '.env.production'],
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: parseInt(<string>process.env.POSTGRES_PORT) || 5432,
            database: process.env.POSTGRES_DATABASE,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            autoLoadEntities: true,
            synchronize: true,
            ssl: {
                rejectUnauthorized: false,
            },
        }),
        TypeOrmModule.forFeature([StockEntity, SaleEntity, InvoiceEntity]),
        ProductsModule,
        TransitionModule,
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
