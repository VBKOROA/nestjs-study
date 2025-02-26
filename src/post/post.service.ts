import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  /**
   * 지정된 ID로 게시글을 찾습니다.
   *
   * @param id - 찾고자 하는 게시글의 고유 식별자
   * @returns 찾은 게시글 객체
   * @throws Error - 게시글을 찾을 수 없을 경우 'Post not found' 에러 발생
   */
  async findById(id: number): Promise<Post> {
    let post = await this.postRepository.findOneBy({ id });
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  }

  /**
   * 데이터베이스에서 모든 게시글을 검색합니다.
   * @returns {Promise<Post[]>} Post 객체 배열로 해결되는 Promise입니다.
   */
  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  /**
   * ID를 기반으로 게시물을 업데이트합니다.
   *
   * @param id 업데이트할 게시물의 ID입니다.
   * @returns void
   */
  async update(id: number): Promise<void> {
    await this.postRepository.update(id, { content: 'Updated Post' });
  }

  /**
   * 게시글의 내용을 업데이트합니다.
   *
   * @param id 업데이트할 게시글의 ID입니다.
   * @param content 새로운 게시글 내용입니다.
   */
  async updateContent(id: number, content: string): Promise<void> {
    await this.postRepository.update(id, { content });
  }

  /**
   * ID에 해당하는 게시물을 삭제합니다.
   * @param id 삭제할 게시물의 ID
   */
  async delete(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }

/**
 * 주어진 내용으로 새 게시물을 생성합니다.
 *
 * @param content 게시물의 내용입니다.
 * @returns void
 */
  async create(content: string): Promise<void> {
    let post = new Post();
    post.content = content;
    await this.postRepository.save(post);
  }
}
