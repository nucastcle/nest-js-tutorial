import { Module } from '@nestjs/common';

import { ValidatesController } from './controllers/validates.controller';

@Module({
  imports: [],
  controllers: [ValidatesController],
  providers: [],
})
export class AppModule {}
