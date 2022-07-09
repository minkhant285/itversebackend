import { Module } from '@nestjs/common';
import { PackageService } from './package.service';
import { PackageController } from './package.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageEntity } from './entities/package.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PackageEntity])],
    controllers: [PackageController],
    providers: [PackageService]
})
export class PackageModule { }
