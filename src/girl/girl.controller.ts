import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GirlService } from './girl.service';
import { GirlDto } from './dto/create-girl-dto';
import { Girl } from './entities/girl.entity';

@ApiTags('girl')
@Controller('girl')
export class GirlController {
  constructor(private readonly girlService: GirlService) {}

  // TODO 分页查询

  @ApiOperation({ summary: '获取所有女性名单' })
  @ApiResponse({
    status: 200,
    description: '返回所有女性名单',
    type: GirlDto,
    isArray: true,
  })
  @Get('/list')
  getGirls(): Promise<Girl[]> {
    return this.girlService.getGirls();
  }

  @ApiOperation({ summary: '新增数据' })
  @ApiBody({ type: GirlDto })
  @ApiResponse({
    status: 200,
    description: '添加数据成功',
    type: GirlDto,
  })
  @Post('/add')
  addGirl(@Body() body: GirlDto) {
    return this.girlService.addGirl(body);
  }

  @ApiOperation({ summary: '删除数据' })
  @ApiParam({ name: 'id', description: '要删除的女性名单的ID' })
  @Get('/delete/:id')
  deleteGirl(@Param('id') id): any {
    return this.girlService.deleteGirl(id);
  }

  @ApiOperation({ summary: '更新数据' })
  @ApiBody({ type: GirlDto })
  @Post('/update/:id')
  updateGirl(@Param('id') id: string, @Body() body: GirlDto) {
    return this.girlService.updateGirl(id, body);
  }

  @ApiOperation({ summary: '根据id查询女性名单' })
  @ApiParam({ name: 'id', description: '要查询的女性名单的ID' })
  @Get('/findGirlById/:id')
  findGirlById(@Param('id') id) {
    return this.girlService.getGirlById(id);
  }

  @ApiOperation({ summary: '根据名字模糊查询女性名单' })
  @ApiParam({ name: 'name', description: '要查询的女性名单的名字' })
  @Get('/findGirlByName/:name')
  findGirlByName(@Param('name') name) {
    return this.girlService.getGirlByName(name);
  }
}
