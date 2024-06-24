import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('sum')
  async getSum(@Query('data') data: string): Promise<number> {
    const numbers = data.split(',').map(Number);
    return this.appService.accumulate(numbers);
  }
  @Get('hello')
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }
}
