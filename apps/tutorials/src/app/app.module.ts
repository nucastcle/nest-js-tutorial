import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlatController } from './flat/flat.controller';
import { ValidatesController } from './validates.controller';

@Module({
  imports: [],
  controllers: [AppController, FlatController, ValidatesController],
  providers: [AppService],
})
export class AppModule {}
