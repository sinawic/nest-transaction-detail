import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(':id?')
  getHello(@Req() request) {
    return this.appService.getHello(request);
  }
}
