import { Stocks } from 'src/products/entities/sale.entity';

export class SaleDto {
    sale_id: string;
    stocks: Stocks;
    total_amount: number;
    invoice_id: string;
}

export class InvoiceDto {
    invoice_id: string;
    sale_id: string;
    total_amount: number;
    discount: number;
    payment_type: number;
}
