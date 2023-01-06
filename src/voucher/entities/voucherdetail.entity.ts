import { CustomerEntity } from 'src/customer/entities/customer.entity';
import { StockEntity } from 'src/products/entities/stock.entity';
import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    DeleteDateColumn,
    Index,
    PrimaryGeneratedColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { VoucherEntity } from './voucher.entity';



@Entity('voucher_detail')
export class VoucherDetailEntity {
    @Index('voucher_detail-id-idx')
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    qty: number;

    @ManyToOne(() => StockEntity, (stock) => stock.id)
    @JoinColumn({ name: "stock_id" })
    stock: StockEntity;

    @ManyToOne(() => VoucherEntity, (v) => v.id)
    @JoinColumn({ name: 'voucher_id' })
    voucher: VoucherEntity

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at?: Date;


}
