import { UserService } from '@nestjs-tutorial/database';
import { UserDto } from '@nestjs-tutorial/database';
import { HeaderInterceptor } from '@nestjs-tutorial/interceptor';
import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { User } from 'libs/database/src/lib/schemas/user.schema';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}
  @Post('create')
  @HttpCode(200)
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseInterceptors(new HeaderInterceptor())
  async create(@Body() body: UserDto) {
    const user = await this.userService.create(body);
    if (!user) return new HttpException('Create failed', HttpStatus.CREATED);
    return user.toUserResponse();
  }
}
