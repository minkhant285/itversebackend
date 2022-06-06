import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
} from 'typeorm';

@Entity('stock')
export class StockEntity {
    @Index('stock-id-idx')
    @PrimaryGeneratedColumn('uuid')
    stock_id: string;

    @Column({ nullable: false })
    sku: string;

    @Index({ fulltext: true })
    @Column({ nullable: false })
    item_name: string;

    @Column({ nullable: false })
    unit_in_stock: number;

    @Column({ type: 'real', nullable: false })
    unit_price: string;

    @Column({ type: 'real', nullable: false, select:false })
    buy_price: number;

    @Column({ nullable: false })
    category_id: number;

    @Column({ nullable: false })
    picture: string;

    @Column({ nullable: true })
    description: string;

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    updated_at: Date;
}
