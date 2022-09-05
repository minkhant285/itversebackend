import { StockEntity } from 'src/products/entities/stock.entity';
import { VoucherEntity } from 'src/voucher/entities/voucher.entity';
import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    OneToMany,
    JoinColumn,
    DeleteDateColumn,
    ManyToOne,
    ManyToMany,
    Index,
    PrimaryGeneratedColumn,
    OneToOne,
} from 'typeorm';



@Entity('sale')
export class SaleEntity {
    @Index('sale-id-idx')
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'real' })
    qty: number;

    @Column({ type: 'real' })
    amount: number;

    @OneToOne(() => StockEntity, (stock) => stock.id)
    @JoinColumn({ name: 'stock' })
    stock: StockEntity;

    @ManyToOne(() => VoucherEntity, (v) => v.sale)
    @JoinColumn({ name: 'voucher' })
    voucher: VoucherEntity;

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at?: Date;
}
