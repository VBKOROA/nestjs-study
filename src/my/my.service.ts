import { Injectable } from '@nestjs/common';
import { MyDto } from './dto/my.dto';

@Injectable()
export class MyService {
    // 더미 데이터
    private myData: MyDto = {
        name: 'test',
        age: 20,
        address: {
            city: 'Seoul',
            gu: 'Gangnam',
            street: 'Teheran-ro',
            buildingNumber: 123
        }
    }
    
    // 데이터 반환
    getMyData(): MyDto {
        return this.myData;
    }

    // 데이터 업데이트
    updateMyDate(myDto: MyDto): void {
        this.myData = myDto;
    }
}
