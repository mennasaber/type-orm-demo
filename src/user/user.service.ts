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
    const user = this.userRepo.create({
      ...createUserDto,
      createdAt: new Date(),
    });
    return this.userRepo.save(user);
  }

  findAll() {
    return this.userRepo.find({ where: { removed: false } });
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepo.update({ id }, updateUserDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.userRepo.update({ id }, { removed: true });
  }
}
