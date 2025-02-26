import { IsNotEmpty } from 'class-validator';

export class WriteCommentDto {
  @IsNotEmpty()
  content: string;
}
