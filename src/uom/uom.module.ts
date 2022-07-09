import { Module } from '@nestjs/common';
import { UomService } from './uom.service';
import { UomController } from './uom.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UOMEntity } from 'src/products/entities/uom.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UOMEntity])],
    controllers: [UomController],
    providers: [UomService]
})
export class UomModule { }
