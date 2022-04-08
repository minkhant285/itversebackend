import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    Index,
} from 'typeorm';

export class Stocks {
    stock_id: string;
    item_name: string;
    quantity: number;
    amount: number;
    sub_total: number;
}

@Entity('user')
export class UserEntity {

    @Index('user-ind')
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Index({ fulltext: true })
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @Column()
    phone: string;

    @Column()
    shipping_addresses: string;

    @Column()
    city: string;

    @Column()
    photoUrl: string;

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    updated_at: Date;
}
