import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockEntity } from 'src/models/stock.entity';
import { getConnection, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(StockEntity)
        private readonly stockRepository: Repository<StockEntity>,
    ) {}

    async create(createProductDto: CreateProductDto): Promise<any> {
        return await this.stockRepository.save(createProductDto);
    }

    async findAll(): Promise<any> {
        return await this.stockRepository.find();
    }

    async findOne(id: string): Promise<any> {
        return await this.stockRepository.findOne(id);
    }

    async findBySKU(sku: string): Promise<any> {
        return await getConnection()
            .createQueryBuilder()
            .select('stock')
            .from(StockEntity, 'stock')
            .where('stock.sku = :sku', { sku })
            .getOne();
    }

    async update(id: string, updateProductDto: UpdateProductDto) {
        return await this.stockRepository.update(id, updateProductDto);
    }

    async remove(id: string) {
        return await this.stockRepository.delete(id);
    }

    async searchProduct(searchQuery: string) {
        return await this.stockRepository
            .createQueryBuilder()
            .select()
            .where('item_name ILIKE :searchQuery', {
                searchQuery: `%${searchQuery}%`,
            })
            .getMany();
        // .orWhere('sku ILIKE :searchQuery', {
        //     searchQuery: `%${searchQuery}%`,
        // })
    }
}
