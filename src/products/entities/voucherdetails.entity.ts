import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
} from 'typeorm';

@Entity('voucherdetails')
export class VoucherDetailsEntity {
    @Index('voucher-detail-id-idx')
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    stock_id: string;

    @Column()
    qty: string;

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    updated_at: Date;
}
