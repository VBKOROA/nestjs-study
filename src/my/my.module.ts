import { Module } from "@nestjs/common";
import { MyController } from "./my.controller";
import { MyService } from './my.service';

// MyController를 MyModule에 추가
@Module({
    controllers: [MyController],
    providers: [MyService]
})
export class MyModule{}