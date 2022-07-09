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

@Entity('package')
export class PackageEntity {

    @Index('package-id-idx')
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToMany(() => CustomerEntity, (cus) => cus.packages)
    customers: CustomerEntity[];

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at?: Date;
}
