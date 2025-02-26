import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/post/post.entity';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commendRepository: Repository<Comment>,
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  /**
   * 특정 게시글에 새로운 댓글을 생성합니다.
   *
   * @param postId 댓글을 작성할 게시글의 ID.
   * @param content 댓글 내용.
   * @throws Error 게시글을 찾을 수 없는 경우 발생.
   */
  async create(postId: number, content: string): Promise<void> {
    const post = await this.postRepository.findOneBy({
      id: postId,
    });
    if (!post) {
      throw new Error('Post not found');
    }
    const comment = new Comment();
    comment.post = post;
    comment.content = content;
    this.commendRepository.save(comment);
  }

  /**
   * ID에 해당하는 댓글을 삭제합니다.
   * @param id 삭제할 댓글의 ID
   */
  async delete(id: number): Promise<void> {
    await this.commendRepository.delete(id);
  }
}
