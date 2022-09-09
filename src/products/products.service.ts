import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductDto } from './dto/product.dto';
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

    async findAll(): Promise<any[]> {
        return await this.stockRepository.find({
            relations: [
                'category', 'uom'
            ]
        });
    }

    async countAll(): Promise<number> {
        return await this.stockRepository.count();
    }

    async findOne(id: string): Promise<any> {
        return await this.stockRepository.findOne(id, { relations: ['uom', 'category'] });
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
        console.log(id, updateProductDto)
        return await this.stockRepository.update(id, {
            sku: updateProductDto.sku,
            name: updateProductDto.name,
            remaining_stock: updateProductDto.remaining_stock,
            purchase_price: updateProductDto.purchase_price,
            sale_price: updateProductDto.sale_price,
            photo: updateProductDto.photo,
            description: updateProductDto.description,
            category: updateProductDto.category,
            uom: updateProductDto.uom
        });
    }

    async remove(id: string) {
        return await this.stockRepository.delete(id);
    }

    async searchProduct(searchQuery: string) {
        const sresult = await this.stockRepository
            .createQueryBuilder()
            .select()
            // .where('to_tsvector(item_name) @@ to_tsquery(:searchQuery)', {searchQuery}).getMany();
            .where('name ILIKE :searchQuery', {
                searchQuery: `%${searchQuery}%`,
            }).getMany();
        // .orWhere('sku ILIKE :searchQuery', {
        //     searchQuery: `%${searchQuery}%`,
        // }).getMany()
        return sresult;
    }
}
