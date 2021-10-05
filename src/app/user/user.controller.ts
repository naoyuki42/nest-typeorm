import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../entities/user.entity';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Get()
  findAllUser(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/:id')
  findOneUser(@Param('id') id: number): Promise<User> {
    return this.userService.find(id);
  }

  @Post()
  createUser(@Body() userData: UserDto): Promise<User> {
    return this.userService.create(userData);
  }

  @Put('/:id')
  updateUser(@Param('id') id: number): Promise<User> {
    return this.userService.update(id);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number): Promise<User> {
    return this.userService.delete(id);
  }

}
