export class CreateProductDto {
    sku: string;
    name: string;
    remaining_stock: number;
    purchase_price: number;
    sale_price: string;
    photo?: Buffer;
    description: string;
    category?: any;
    uom?: any;
}
