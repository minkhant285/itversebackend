import { PartialType } from '@nestjs/mapped-types';
import { InvoiceDto, SaleDto } from './create-transition.dto';

export class UpdateTransitionDto extends PartialType(SaleDto) {}
export class UpdateInvoiceDto extends PartialType(InvoiceDto) {}
