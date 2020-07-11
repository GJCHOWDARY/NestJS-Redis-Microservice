import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  public  saveData(data: any): Object {
    return {message: 'Hi I am Redis-Microservice to Save Data',data};
  }
  
  public async getData() {
    return 'Hi I am Redis-Microservice';
  }
}
