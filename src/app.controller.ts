import { Controller, Get, Logger} from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  @MessagePattern('add')
  async saveData(data: any)  {
    this.logger.log('Post Data Microservice.... from Redis');
    return this.appService.saveData(data);
  }

  @MessagePattern('get')
  async getData(data: any)  {
    this.logger.log('Get Microserive.... from Redis+++')
    return this.appService.getData();
  }

}
