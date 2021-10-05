import { Controller, Get, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    this.userService.remove(id);
  }
}
