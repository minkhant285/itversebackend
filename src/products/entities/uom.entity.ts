import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
    OneToMany,
    DeleteDateColumn,
} from 'typeorm';
import { StockEntity } from './stock.entity';

@Entity('uom')
export class UOMEntity {

    @Index('uom-id-idx')
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    unit: string;

    @Column()
    description: string;

    @OneToMany(() => StockEntity, (stock) => stock.uom)
    stock: StockEntity[];

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at?: Date;
}
