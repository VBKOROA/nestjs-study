import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // 요청 데이터를 해당 타입으로 변환
  })); // 전역 파이프 설정
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
