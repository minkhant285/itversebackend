import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { StockEntity } from './entities/stock.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(StockEntity)
        private readonly stockRepository: Repository<StockEntity>,
    ) { }

    async create(createProductDto: CreateProductDto): Promise<any> {
        return await this.stockRepository.save(createProductDto);
    }

    async findAll(page = 1, take = 30): Promise<any> {
        const d = await this.stockRepository.query(`
            select * from stock limit ${take} offset ${take * (page - 1)}
        `);
        return d;
    }

    async countAll(): Promise<number> {
        return await this.stockRepository.count();
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
            .where('to_tsvector(item_name) @@ to_tsquery(:query)', {
                query: searchQuery,
            })
            .getMany();
        // .where('item_name ILIKE :searchQuery', {
        //     searchQuery: `%${searchQuery}%`,
        // })
        // .orWhere('sku ILIKE :searchQuery', {
        //     searchQuery: `%${searchQuery}%`,
        // })
    }
}
