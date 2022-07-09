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

@Entity('customer')
export class CustomerEntity {

    @Index('customer-id-idx')
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    name: string;

    // @Column({ nullable: true })
    // address: string;

    // @Column({ nullable: true })
    // email: string;

    // @Column({ nullable: true })
    // phone: string;

    // @Column({ nullable: true })
    // acctype: string;

    @Column()
    level: string;

    @Column({ nullable: true })
    transitions: string;

    @Column({ nullable: true })
    password: string;

    @ManyToMany(() => PackageEntity, (p) => p.customers, {
        cascade: true, onUpdate: 'CASCADE'
    })
    @JoinTable()
    packages: PackageEntity[];

    @ManyToMany(() => StockEntity, { cascade: true, onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    @JoinTable()
    fav_items: StockEntity[];

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at?: Date;
}
