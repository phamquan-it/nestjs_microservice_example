import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('MATH_SERVICE') private readonly client: ClientProxy) {}
  async onModuleInit() {
    await this.getHello(); // Call getHello() during module initialization
  }

  async accumulate(numbers: number[]): Promise<number> {
    return firstValueFrom(this.client.send<number>({ cmd: 'sum' }, numbers));
  }
  async getHello(): Promise<string> {
    return firstValueFrom(this.client.send<string>({ cmd: 'hello' }, {}));
  }
}
