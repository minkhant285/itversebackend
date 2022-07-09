import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
    ManyToOne,
    JoinColumn,
    DeleteDateColumn,
    ManyToMany,
} from 'typeorm';
import { UOMEntity } from './uom.entity';
import { CategoryEntity } from './stockcategory.entity';
import { CustomerEntity } from 'src/customer/entities/customer.entity';

@Entity('stock')
export class StockEntity {
    @Index('stock-id-idx')
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    sku: string;

    @Index({ fulltext: true })
    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    remaining_stock: number;

    @Column({ type: 'real', nullable: false, select: false })
    purchase_price: number;

    @Column({ type: 'real', nullable: false })
    sale_price: string;

    @Column({ type: "bytea", nullable: true })
    photo: Buffer;

    @Column({ nullable: true })
    description: string;

    @ManyToOne(() => CategoryEntity, (category: { id: string }) => category.id)
    @JoinColumn({ name: 'category_id' })
    category: CategoryEntity;

    @ManyToOne(() => UOMEntity, (uom: { id: string }) => uom.id)
    @JoinColumn({ name: 'uomid' })
    uom: UOMEntity;

    // @ManyToMany(() => ArticleEntity, (article: { id: string }) => article.id)
    // @JoinColumn({ name: 'article' })
    // articles: ArticleEntity[];


    // @ManyToMany(() => CustomerEntity)
    // customers: CustomerEntity[];

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at?: Date;
}
