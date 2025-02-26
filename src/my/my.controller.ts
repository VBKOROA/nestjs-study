import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { MyDto } from './dto/my.dto';
import { MyService } from './my.service';

@Controller('my') // URL prefix를 지정
export class MyController {
  // 생성자 주입을 사용하여 MyService를 주입
  constructor(private readonly myService: MyService) {}

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT) // HTTP 상태 코드를 204로 설정
  update(@Body() myDto: MyDto) {
    this.myService.updateMyDate(myDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK) // HTTP 상태 코드를 200으로 설정
  myDetail(): MyDto {
    return this.myService.getMyData();
  }
}
