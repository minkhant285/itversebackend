import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    UseInterceptors,
    UploadedFile,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get('/page/:pagenumber')
    async findAll(@Param('pagenumber') pnum: number) {
        const result = await this.productsService.findAll();
        return result
    }

    @Get()
    countProducts() {
        return this.productsService.countAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productsService.findOne(id);
    }

    @Get('/search/:text')
    search(@Param('text') text: string) {
        if (text || text !== null || text === '') {
            return this.productsService.searchProduct(text);
        } else {
            return [];
        }
    }

    @Get('sku/:sku')
    findSKU(@Param('sku') sku: string) {
        return this.productsService.findBySKU(sku);
    }

    // @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productsService.create(createProductDto);
    }

    @Post('file/upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './product_photos/files',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now();
                const ext = extname(file.originalname);
                const filename = `${file.originalname}-${uniqueSuffix}${ext}`;
                callback(null, filename);
            }
        })
    }))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file)
        return file
    }

    // @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateProductDto: UpdateProductDto,
    ) {
        return this.productsService.update(id, updateProductDto);
    }

    // @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productsService.remove(id);
    }
}
