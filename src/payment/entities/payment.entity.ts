import { VoucherEntity } from 'src/voucher/entities/voucher.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    DeleteDateColumn,
    OneToMany,
    Index,
    ManyToOne,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { PackageEntity } from '../../package/entities/package.entity';
import { StockEntity } from '../../products/entities/stock.entity';

@Entity('payment')
export class PaymentEntity {

    @Index('payment-id-idx')
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    phone_number: string;

    @Column({ type: "bytea", nullable: true })
    photo: Buffer;

    @Column({ nullable: false })
    type: string;

    @OneToMany(() => VoucherEntity, (v) => v.id)
    @JoinColumn({ name: 'vouchers' })
    vouchers: VoucherEntity[];

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at?: Date;
}
