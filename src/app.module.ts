import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyModule } from './my/my.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ // TypeORM 설정
      type: 'mariadb', // MariaDB 사용
      host: 'localhost', // 호스트
      port: 3300, // 포트
      username: 'nestuser', // 유저 이름
      password: 'nestpassword', // 비밀번호
      database: 'nest_dev', // 데이터베이스 이름
      entities: [__dirname + '/**/*.entity.{ts,js}'], // 엔티티 위치
      synchronize: true
    }),
    MyModule,
    PostModule,
    CommentModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
