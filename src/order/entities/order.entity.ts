import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  itemsCount: number;
  @Column()
  price: number;
  @Column()
  createdAt: Date;
  @Column({ default: false })
  removed: boolean;
  //NOTE: Important to implement create - update
  @Column()
  userId: number;
  @ManyToOne((type) => User, (user) => user.orders)
  user: User;

  @BeforeInsert()
  updateDates() {
    this.createdAt = new Date();
  }
}
