import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  @Column({ default: new Date() })
  createdAt: Date;
}
