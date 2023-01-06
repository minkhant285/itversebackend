export class CreateVoucherDto {
    voucherDetails?: any;
    customer: any;
    discount: number;
    delivery_fee: number;
    delivery_method: string;
    status: string;
    payment_methods?: any;
}

export class CreateVoucherDeatailDto {
    qty: number;
    stock: any;
    voucher: any;
}
