import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(@InjectRepository(Order) private orderRepo: Repository<Order>) {}
  async create(createOrderDto: CreateOrderDto) {
    const order = this.orderRepo.create(createOrderDto);
    return this.orderRepo.save(order);
  }

  findAll() {
    return this.orderRepo.find({ where: { removed: false } });
  }

  async findOne(id: number) {
    const order = await this.orderRepo
      .createQueryBuilder('order')
      .leftJoin('order.user', 'user')
      .addSelect('user.name')
      .where('order.id=:id', { id })
      .getOne();

    //NOTE: Strange behavior -> 2 queries
    this.orderRepo.findOne({
      select: {
        user: {
          name: true,
        },
      },
      where: { id },
      relations: { user: true },
    });
    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepo.update({ id }, updateOrderDto);
  }

  remove(id: number) {
    return this.orderRepo.update({ id }, { removed: true });
  }
}
