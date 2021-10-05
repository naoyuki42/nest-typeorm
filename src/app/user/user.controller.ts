import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../entities/user.entity';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.userService.getUser(Number(id));
  }

  @Post()
  async createUser(@Body() user: UserDto): Promise<void> {
    this.userService.createUser(user);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() user: UserDto,
  ): Promise<void> {
    this.userService.updateUser(Number(id), user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    this.userService.deleteUser(Number(id));
  }
}
