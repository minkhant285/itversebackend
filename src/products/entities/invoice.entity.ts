import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
} from 'typeorm';

@Entity('invoice')
export class InvoiceEntity {
    @PrimaryColumn()
    invoice_id: string;

    @Column({ nullable: false })
    sale_id: string;

    @Column({ type: 'real', nullable: false })
    discount: number;

    @Column({ nullable: false })
    payment_type: number;

    @Column({ type: 'real', nullable: false })
    total_amount: number;

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    updated_at: Date;
}
