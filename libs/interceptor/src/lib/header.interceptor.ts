import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    if (!request.headers['content-type']) throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    // if (!request.headers['accept-language']) throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    
    return next.handle();
  }
}
