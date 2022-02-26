import { Module } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';

@Module({
  controllers: [],
  providers: [],
  exports: [],
})
export class ExceptionModule {}
export { HttpExceptionFilter };
