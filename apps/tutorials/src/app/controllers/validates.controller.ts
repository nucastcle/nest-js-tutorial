import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FormDto } from '../dtos/form';

@Controller('')
export class ValidatesController {
  constructor() {}

  @Post('validate')
  @UsePipes(new ValidationPipe({ transform: true }))
  validate(@Body() body: FormDto[]) {
    return 'OK';
  }

  @Post('non-validate')
  @UsePipes(new ValidationPipe({ skipMissingProperties: true }))
  nonValidate(@Body() body: FormDto) {
    return 'OK';
  }
}
