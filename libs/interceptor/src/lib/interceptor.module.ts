import { Module } from '@nestjs/common';
import { HeaderInterceptor } from './header.interceptor';

@Module({
  controllers: [],
  providers: [],
  exports: [],
})
export class InterceptorModule {}
export { HeaderInterceptor };
