import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async getUser(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async createUser(user: UserDto): Promise<void> {
    this.usersRepository.save(user);
  }

  async updateUser(id: number, user: UserDto): Promise<void> {
    this.usersRepository.update(id, user);
  }

  async deleteUser(id: number): Promise<void> {
    this.usersRepository.delete(id);
  }
}
