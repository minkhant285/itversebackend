import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { PackageEntity } from './entities/package.entity';

@Injectable()
export class PackageService {

    constructor(
        @InjectRepository(PackageEntity)
        private readonly packageRepository: Repository<PackageEntity>,
    ) { }

    async create(createPackageDto: CreatePackageDto) {
        return await this.packageRepository.save(createPackageDto);
    }

    async findAll() {
        return await this.packageRepository.find({ relations: ['customers'] })
    }

    findOne(id: number) {
        return `This action returns a #${id} package`;
    }

    update(id: number, updatePackageDto: UpdatePackageDto) {
        return `This action updates a #${id} package`;
    }

    remove(id: number) {
        return `This action removes a #${id} package`;
    }
}
