import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    const order = this.orderRepo.create({
      ...createOrderDto,
      createdAt: new Date(),
    });
    return this.orderRepo.save(order);
  }

  findAll() {
    return this.orderRepo.find({ where: { removed: false } });
  }

  findOne(id: number) {
    return this.orderRepo.findOne({ where: { id } });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepo.update({ id }, updateOrderDto);
  }

  remove(id: number) {
    return this.orderRepo.update({ id }, { removed: true });
  }
}
