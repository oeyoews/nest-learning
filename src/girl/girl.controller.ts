import { Controller, Get, Post, Request, Query, Body } from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(private readonly girlService: GirlService) {}

  @Get()
  getGirls() {
    return this.girlService.getGirls();
  }

  @Post('/add')
  addGirl(@Body() body) {
    return this.girlService.addGirl(body);
  }

  @Get('/getGirlById')
  getGirById(@Query() query) {
    let id: number = Number(query.id);
    return this.girlService.getGirlById(id);
  }
}
