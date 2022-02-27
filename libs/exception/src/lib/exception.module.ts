import { Module } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';
import { MongoExceptionFilter } from './mongo.exception';

@Module({
  controllers: [],
  providers: [],
  exports: [],
})
export class ExceptionModule {}
export { HttpExceptionFilter, MongoExceptionFilter };
