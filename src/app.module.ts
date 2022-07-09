import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TransitionModule } from './transition/transition.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { StockEntity } from './products/entities/stock.entity';
import { CategoryEntity } from './products/entities/stockcategory.entity';
import { UOMEntity } from './products/entities/uom.entity';
import { UserEntity } from './user/entities/user.entity';
import { UomModule } from './uom/uom.module';
import { CategoryModule } from './category/category.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerEntity } from './customer/entities/customer.entity';
import { PackageModule } from './package/package.module';
import { PackageEntity } from './package/entities/package.entity';

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
            // ssl: {
            //     rejectUnauthorized: false,
            // },
        }),
        TypeOrmModule.forFeature([
            StockEntity,
            CategoryEntity,
            UserEntity,
            UOMEntity,
            CustomerEntity,
            PackageEntity
            // StockEntity,
            // SaleEntity,
            // InvoiceEntity,
        ]),
        ProductsModule,
        // TransitionModule,
        UserModule,
        AuthModule,
        UomModule,
        CategoryModule,
        CustomerModule,
        PackageModule,
    ],
    controllers: [AppController],
    providers: [AppService, AuthService, UserService],
})
export class AppModule { }
