import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoiceEntity } from 'src/models/invoice.entity';
import { SaleEntity } from 'src/models/sale.entity';
import { Repository } from 'typeorm';
import { InvoiceDto, SaleDto } from './dto/create-transition.dto';
import {
    UpdateInvoiceDto,
    UpdateTransitionDto,
} from './dto/update-transition.dto';

@Injectable()
export class TransitionService {
    constructor(
        @InjectRepository(SaleEntity)
        private readonly transitionRepository: Repository<SaleEntity>,
        @InjectRepository(InvoiceEntity)
        private readonly invoiceRepository: Repository<InvoiceEntity>,
    ) {}

    async create(transitionDto: SaleDto) {
        console.log(transitionDto);
        await this.createInvoice({
            discount: 0,
            payment_type: 0,
            sale_id: transitionDto.sale_id,
            invoice_id: transitionDto.invoice_id,
            total_amount: transitionDto.total_amount,
        });
        return await this.transitionRepository.save(transitionDto);
    }

    async createInvoice(invoiceDto: InvoiceDto) {
        console.log(invoiceDto);
        return await this.invoiceRepository.save(invoiceDto);
    }

    findAll() {
        return this.transitionRepository.find();
    }

    findOne(id: string) {
        return this.transitionRepository.findOne(id);
    }

    async update(id: string, updateTransitionDto: UpdateTransitionDto) {
        this.updateInvoice(updateTransitionDto.invoice_id, {
            discount: 0,
            invoice_id: updateTransitionDto.invoice_id,
            payment_type: 0,
            sale_id: updateTransitionDto.sale_id,
            total_amount: updateTransitionDto.total_amount,
        });
        return await this.transitionRepository.update(id, updateTransitionDto);
    }

    async updateInvoice(id: string, updateInvoiceDto: UpdateInvoiceDto) {
        return await this.invoiceRepository.update(id, updateInvoiceDto);
    }

    remove(id: number) {
        return `This action removes a #${id} transition`;
    }
}
