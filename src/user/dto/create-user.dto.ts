export class CreateUserDto {
    name: string;
    email: string;
    password: string;
    role: string;
    phone: string;
    shipping_addresses: string;
    city: string;
    created_at?: Date;
    updated_at?: Date;
    photoUrl: string;
}
export interface CreateUserIF {
    name: string;
    email: string;
    password: string;
    role: string;
    phone: string;
    shipping_addresses: string;
    city: string;
    created_at?: Date;
    updated_at?: Date;
    photoUrl: string;
}
