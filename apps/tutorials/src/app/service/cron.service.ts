import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);
//   @Cron('* * * * * *', {
//     name: 'cron',
//   })
//   trigger() {
//     this.logger.debug('run!!');
//   }
}
