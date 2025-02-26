import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';
import { Post } from 'src/post/post.entity';
import { CommentController } from './comment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Post])],
  providers: [CommentService],
  exports: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}
