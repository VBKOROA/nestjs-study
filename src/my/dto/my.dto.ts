import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { AddressDto } from "./address.dto";

export class MyDto {
    @IsString({
        message: '이름은 문자열이어야 합니다.'
    }) // class-validator를 사용하여 string인지 확인
    @IsNotEmpty() // class-validator를 사용하여 비어있지 않은지 확인
    name: string;
    
    @IsInt({
        message: '나이는 정수여야 합니다.'
    }) // class-validator를 사용하여 int인지 확인
    @Type(() => Number) // class-transformer를 사용하여 number로 변환
    age: number;

    @ValidateNested() // class-validator를 사용하여 중첩된 객체를 검증
    @Type(() => AddressDto) // class-transformer를 사용하여 AddressDto로 변환
    address: AddressDto
}