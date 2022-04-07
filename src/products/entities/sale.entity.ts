import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
} from 'typeorm';

export class Stocks {
    stock_id: string;
    item_name: string;
    quantity: number;
    amount: number;
    sub_total: number;
}

@Entity('sale')
export class SaleEntity {
    @PrimaryColumn()
    sale_id: string;

    @Column({ type: 'jsonb' })
    stocks: Stocks;

    @Column({ type: 'real' })
    total_amount: number;

    @Column()
    invoice_id: string;

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    updated_at: Date;
}
