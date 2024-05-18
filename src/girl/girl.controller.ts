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
  ApiBody,
  ApiOperation,
  ApiProperty,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GirlService } from './girl.service';
import { CreateCatDto } from './dto/create-girl-dto';
import { Girl } from './entities/girl.entity';

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

  @ApiOperation({ summary: '新增数据' })
  @ApiResponse({
    status: 200,
    description: '添加数据成功',
    type: CreateCatDto,
  })
  @Post('/add')
  addGirl(@Body() body: CreateCatDto) {
    return this.girlService.addGirl(body);
  }

  @ApiOperation({ summary: '删除数据' })
  @ApiProperty({ description: 'id', default: '6648516cbc17f9dc50a70793' })
  @Get('/delete/:id')
  deleteGirl(@Param('id') id): any {
    return this.girlService.deleteGirl(id);
  }

  @ApiOperation({ summary: '更新数据' })
  @Post('/update/:id')
  updateGirl(@Param('id') id: string, @Body() body: CreateCatDto) {
    return this.girlService.updateGirl(id, body);
  }

  @ApiOperation({ summary: '根据id查询女性名单' })
  @Get('/findGirlById/:id')
  findGirlById(@Param('id') id) {
    return this.girlService.getGirlById(id);
  }

  @ApiOperation({ summary: '根据名字模糊查询女性名单' })
  @Get('/findGirlByName/:name')
  findGirlByName(@Param('name') name) {
    return this.girlService.getGirlByName(name);
  }
}
