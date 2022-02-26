import { HttpExceptionFilter } from '@nestjs-tutorial/exception';
import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FormDto } from '../dtos/form';

@Controller('')
export class ValidatesController {
  constructor() {}

  @Post('validate')
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseFilters(new HttpExceptionFilter())
  validate(@Body() body: FormDto) {
    return 'OK';
  }

  @Post('non-validate')
  @UsePipes(new ValidationPipe({ skipMissingProperties: true }))
  nonValidate(@Body() body: FormDto) {
    return 'OK';
  }

}
