import { CustomerEntity } from 'src/customer/entities/customer.entity';
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
import { SaleDto } from '../dto/sale.dto';



@Entity('sale')
export class SaleEntity {
    @Index('sale-id-idx')
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => CustomerEntity, (customer) => customer.id)
    @JoinColumn({ name: 'customer_id' })
    customer: CustomerEntity;

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at?: Date;

    @Column({ type: 'jsonb', nullable: true })
    saleDetails: SaleDto[];
}
