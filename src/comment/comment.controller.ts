import { Body, Controller, Post, Query } from '@nestjs/common';
import { CommentService } from './comment.service';
import { WriteCommentDto } from './write-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async writeComment(
    @Query('postId') postId: number,
    @Body() dto: WriteCommentDto,
  ): Promise<void> {
    await this.commentService.create(postId, dto.content);
  }
}
