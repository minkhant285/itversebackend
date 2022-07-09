export class CreateCustomerDto {
    name: string;
    address?: string;
    email?: string;
    phone?: string;
    acctype?: string;
    level: string;
    transitions?: string;
    password?: string;
    favourite?: any;
    packages?: any;
}
