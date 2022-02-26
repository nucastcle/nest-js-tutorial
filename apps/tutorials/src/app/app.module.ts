import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { ValidatesController } from './controllers/validates.controller';
import { CronService } from './service/cron.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [ValidatesController],
  providers: [CronService],
})
export class AppModule {}
