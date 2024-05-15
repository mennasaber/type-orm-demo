import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  async create(createUserDto: CreateUserDto) {
    const user = this.userRepo.create(createUserDto);
    return this.userRepo.save(user);
  }

  async findAll() {
    //NOTE: typeORM Will transform both to the same sql query
    const users = await this.userRepo
      .createQueryBuilder('user')
      .loadRelationCountAndMap('user.ordersCount', 'user.orders')
      .where('user.removed = :removed', { removed: false })
      .getMany();
    return users; //this.userRepo.find({ where: { removed: false } });
  }

  async findOne(id: number) {
    //NOTE: typeORM Will transform both to the same sql query
    const user = await this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.orders', 'order')
      .where('user.id=:id', { id })
      .getOne();
    return user; //this.userRepo.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepo.update({ id }, updateUserDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.userRepo.update({ id }, { removed: true });
  }
}
