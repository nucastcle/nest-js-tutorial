import { DatabaseModule, UserService } from '@nestjs-tutorial/database';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { ValidatesController } from './controllers/validates.controller';
import { CronService } from './service/cron.service';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [ScheduleModule.forRoot(), DatabaseModule],
  controllers: [ValidatesController, UserController],
  providers: [CronService],
})
export class AppModule {}
