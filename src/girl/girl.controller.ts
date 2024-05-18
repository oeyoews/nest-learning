import {
  Controller,
  Get,
  Post,
  Request,
  Query,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GirlService } from './girl.service';
// import { CreateCatDto } from './dto/create-girl-dto';
import { Girl } from './entities/girl.entity';

// @ApiBearerAuth()
@ApiTags('girl')
@Controller('girl')
export class GirlController {
  constructor(private readonly girlService: GirlService) {}

  @ApiOperation({ summary: '获取所有女性名单' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Girl,
  })
  @Get('/list')
  getGirls(): Promise<Girl[]> {
    return this.girlService.getGirls();
  }

  @Post('/add')
  addGirl(@Body() body) {
    return this.girlService.addGirl(body);
  }

  @Get('/delete/:id')
  deleteGirl(@Param() params): any {
    // NOTE: 这里 id 不是 number 类型
    return this.girlService.deleteGirl(params.id);
  }

  @Post('/update/:id')
  updateGirl(@Param() params, @Body() body) {
    return this.girlService.updateGirl(params.id, body);
  }

  @Get('/findGirlById/:id')
  findGirlById(@Param() params) {
    let id: number = Number(params.id);
    return this.girlService.getGirlById(id);
  }
}
