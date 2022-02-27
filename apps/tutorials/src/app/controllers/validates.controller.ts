import { HeaderInterceptor } from '@nestjs-tutorial/interceptor';
import { HttpExceptionFilter } from '@nestjs-tutorial/exception';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FormDto } from '../dtos/form';

@Controller('')
export class ValidatesController {
  constructor() {}

  @Post('validate')
  @HttpCode(200)
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseInterceptors(new HeaderInterceptor())
  validate(@Body() body: FormDto) {
    return 'OK';
  }

  @Post('non-validate')
  @UsePipes(new ValidationPipe({ skipMissingProperties: true }))
  nonValidate(@Body() body: FormDto) {
    return 'OK';
  }

}
