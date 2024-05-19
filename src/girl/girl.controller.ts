import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GirlService } from './girl.service';
import { CreateGirlDto } from './dto/create-girl-dto';
import { Girl } from './entities/girl.entity';

@ApiTags('girl')
@Controller('girl')
export class GirlController {
  constructor(private readonly girlService: GirlService) {}

  @ApiOperation({ summary: '获取所有女性名单' })
  @ApiResponse({
    status: 200,
    description: '返回所有女性名单',
    type: CreateGirlDto,
    isArray: true,
  })
  @Get('/list')
  getGirls(): Promise<Girl[]> {
    return this.girlService.getGirls();
  }

  @ApiOperation({ summary: '新增数据' })
  @ApiParam({ name: 'body', description: '要新增的数据', type: CreateGirlDto })
  @ApiBody({ type: CreateGirlDto })
  @ApiResponse({
    status: 200,
    description: '添加数据成功',
    type: CreateGirlDto,
  })
  @Post('/add')
  addGirl(@Body() body: CreateGirlDto) {
    return this.girlService.addGirl(body);
  }

  @ApiOperation({ summary: '删除数据' })
  @ApiParam({ name: 'id', description: '要删除的女性名单的ID' })
  @Get('/delete/:id')
  deleteGirl(@Param('id') id): any {
    return this.girlService.deleteGirl(id);
  }

  @ApiOperation({ summary: '更新数据' })
  @Post('/update/:id')
  updateGirl(@Param('id') id: string, @Body() body: CreateGirlDto) {
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
