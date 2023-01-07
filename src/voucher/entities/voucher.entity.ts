import { PaymentEntity } from 'src/payment/entities/payment.entity';
import { SaleEntity } from 'src/sale/entities/sale.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
    ManyToMany,
    JoinColumn,
    DeleteDateColumn,
    OneToMany,
    ManyToOne,
    JoinTable,
} from 'typeorm';
import { CustomerEntity } from '../../customer/entities/customer.entity';
import { VoucherDetailEntity } from './voucherdetail.entity';

@Entity('voucher')
export class VoucherEntity {

    @Index('voucher-id-idx')
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    discount: number;

    @Column({ nullable: false })
    status: string;

    @Column({ nullable: true })
    delivery_fee: number;

    @Column({ nullable: true })
    delivery_method: string;

    @OneToMany(() => VoucherDetailEntity, (vd) => vd.voucher)
    voucherDetails: VoucherDetailEntity[]


    @ManyToOne(() => CustomerEntity, (cname) => cname.vouchers)
    @JoinColumn()
    customer: CustomerEntity;


    @ManyToOne(() => PaymentEntity, (p) => p.id)
    @JoinColumn({ name: 'payment_method' })
    payment_methods: PaymentEntity

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at?: Date;

}
