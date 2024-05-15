import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from '../../order/entities/order.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  phoneNumber: string;
  @Column()
  email: string;
  @Column({ default: false })
  removed: boolean;
  @Column()
  createdAt: Date;
  @OneToMany((type) => Order, (order) => order.user)
  orders: Order[];

  @BeforeInsert()
  updateDates() {
    this.createdAt = new Date();
  }
}
