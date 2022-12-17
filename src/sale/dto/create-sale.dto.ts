import { CustomerDto } from "src/customer/dto/customer.dto";
import { SaleDto } from "./sale.dto";

export class CreateSaleDto {
    customer: any;
    saleDetails: SaleDto[];
}
