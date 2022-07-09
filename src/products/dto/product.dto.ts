export class ProductDto {
    id: string;
    sku: string;
    name: string;
    remaining_stock: number;
    purchase_price: number;
    sale_price: string;
    photo?: Buffer;
    description: string;
    category: string;
    uom: string;
    created_at: Date;
    updated_at: Date;
}
