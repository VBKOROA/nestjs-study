import { Injectable } from '@nestjs/common';

@Injectable() // Provider임을 나타내는 데코레이터
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
