import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateVoucherDeatailDto, CreateVoucherDto } from './dto/create-voucher.dto';
import { VoucherDetailService } from './voucherdetail.service';

@Controller('voucherdetails')
export class VoucherDetailController {
    constructor(
        private readonly voucherDatailService: VoucherDetailService) { }

    @Get()
    findDetail() {
        return this.voucherDatailService.findAll();
    }

    @Post()
    createVoucherDetail(@Body() voucherDetail: CreateVoucherDeatailDto) {
        return this.voucherDatailService.create(voucherDetail);
    }
}
