import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
} from 'typeorm';

@Entity('voucher')
export class VoucherEntity {
    @Index('voucher-id-idx')
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    voucher_details: string[];

    @Column()
    customer_id: string;

    @Column()
    discount: string;

    @Column()
    status: string;

    @Column()
    created_user_id: string;

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    updated_at: Date;
}
