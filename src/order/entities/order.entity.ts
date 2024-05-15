import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  itemsCount: number;
  @Column()
  price: number;
  @Column()
  createdAt: Date;
  @ManyToOne((type) => User, (user) => user.orders)
  user: User;
}
