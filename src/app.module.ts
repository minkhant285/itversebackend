import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceEntity } from './products/entities/invoice.entity';
import { SaleEntity } from './products/entities/sale.entity';
import { StockEntity } from './products/entities/stock.entity';
import { ProductsModule } from './products/products.module';
import { TransitionModule } from './transition/transition.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { UserEntity } from './user/entities/user.entity';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env.development', '.env.production'],
            isGlobal: true,
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '../src', 'assets/img/itverse_photos'),
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
        TypeOrmModule.forFeature([
            StockEntity,
            SaleEntity,
            InvoiceEntity,
            UserEntity,
        ]),
        ProductsModule,
        TransitionModule,
        UserModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService, AuthService, UserService],
})
export class AppModule { }
