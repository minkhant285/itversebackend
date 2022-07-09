import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/products/entities/stockcategory.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CategoryEntity])],
    controllers: [CategoryController],
    providers: [CategoryService]
})
export class CategoryModule { }
