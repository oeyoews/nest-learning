import {
  Controller,
  Get,
  Post,
  Request,
  Query,
  Body,
  Param,
} from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(private readonly girlService: GirlService) {}

  @Get('list')
  getGirls() {
    return this.girlService.getGirls();
  }

  @Post('/add')
  addGirl(@Body() body) {
    return this.girlService.addGirl(body);
  }

  @Get('/findGirlById/:id')
  findGirlById(@Param() params) {
    let id: number = Number(params.id);
    return this.girlService.getGirlById(id);
  }
}
