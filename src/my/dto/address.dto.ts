import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class AddressDto {
  // 시
  @IsString()
  city: string;

  // 구
  @IsString()
  gu: string;

  // 도로명
  @IsString()
  street: string;

  // 건물 번호
  @IsInt()
  @Type(() => Number)
  buildingNumber: number;

  // 상세 주소
  @IsOptional()
  @IsString()
  detail?: string;
}
