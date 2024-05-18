import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Girl } from './girl.entity';

@Injectable()
export class GirlService {
  constructor(@InjectRepository(Girl) private girlRepo: Repository<Girl>) {}

  getGirls() {
    return this.girlRepo.find();
  }

  async addGirl({ name, age }) {
    const girl = new Girl();
    girl.name = name;
    girl.age = age;
    return this.girlRepo.save(girl);
  }

  getGirlById(id: number) {
    if (!id) {
      return {
        code: 400,
        msg: '参数不正确',
      };
    }

    // 模拟数据库数据
    const data = [
      {
        id: 1,
        name: 'lily',
        age: 18,
      },
      {
        id: 1,
        name: 'lily2',
        age: 19,
      },
      {
        id: 2,
        name: 'lucy',
        age: 19,
      },
      {
        id: 3,
        name: 'jack',
        age: 20,
      },
    ];

    if (!data.find((item) => item.id === id)) {
      return {
        code: 400,
        msg: '数据不存在',
      };
    }

    return {
      code: 200,
      data: data.find((item) => item.id === id),
      msg: '获取成功',
    };
  }
}
