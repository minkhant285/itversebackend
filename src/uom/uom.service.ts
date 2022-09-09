import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UOMEntity } from 'src/uom/entities/uom.entity';
import { Repository } from 'typeorm';
import { CreateUomDto } from './dto/create-uom.dto';
import { UpdateUomDto } from './dto/update-uom.dto';

@Injectable()
export class UomService {
    constructor(
        @InjectRepository(UOMEntity)
        private readonly uomRepository: Repository<UOMEntity>,
    ) { }

    async create(createUomDto: CreateUomDto) {
        return await this.uomRepository.save(createUomDto);
    }

    async findAll() {
        return await this.uomRepository.find({
            relations: [
                'stock'
            ]
        });
    }

    findOne(id: number) {
        return `This action returns a #${id} uom`;
    }

    update(id: number, updateUomDto: UpdateUomDto) {
        return `This action updates a #${id} uom`;
    }

    async remove(id: string) {
        return await this.uomRepository.softDelete(id);
    }
}
