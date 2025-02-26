import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostEntity } from './post.entity';
import { UpdatePostDto } from './dtos/update-post.dto';
import { CreatePostDto } from './dtos/create-post.dto';

// 기본적인 CRUD(Create, Read, Update, Delete) API를 제공하는 PostController 클래스
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getPostById(@Param('id') id: number): Promise<PostEntity> {
    return await this.postService.findById(id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getPosts(): Promise<PostEntity[]> {
    return await this.postService.findAll();
  }

  @Post(':id/update')
  @HttpCode(HttpStatus.NO_CONTENT)
  async updatePost(@Param('id') id: number): Promise<void> {
    await this.postService.update(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async updatePostContent(
    @Param('id') id: number,
    @Body() dto: UpdatePostDto,
  ): Promise<void> {
    await this.postService.updateContent(id, dto.content);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deletePost(@Param('id') id: number): Promise<void> {
    await this.postService.delete(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createPost(@Body() dto: CreatePostDto): Promise<void> {
    await this.postService.create(dto.content);
  }
}
