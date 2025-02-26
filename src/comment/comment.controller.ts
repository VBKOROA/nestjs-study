import { Body, Controller, Delete, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { CommentService } from './comment.service';
import { WriteCommentDto } from './write-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async writeComment(
    @Query('postId') postId: number,
    @Body() dto: WriteCommentDto,
  ): Promise<void> {
    await this.commentService.create(postId, dto.content);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteComment(@Param('id') id: number): Promise<void> {
    await this.commentService.delete(id);
  }
}
