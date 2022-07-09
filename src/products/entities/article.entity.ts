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
} from 'typeorm';
import { StockEntity } from './stock.entity';

@Entity('article')
export class ArticleEntity {

    @Index('article-id-idx')
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    content: string;

    @Column({ nullable: true })
    cover_photo: string;

    @Column()
    stocks: string[];

    @Column()
    allowed_package: string[];

    @Column({ nullable: false })
    title: string;

    @Column()
    category: string;

    // @ManyToMany(() => StockEntity, (stock) => stock.articles)
    // @JoinColumn({ name: 'stock' })
    // stock: StockEntity[];

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at?: Date;
}
