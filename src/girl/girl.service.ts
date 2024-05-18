import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Girl } from './entities/girl.entity';
import { CreateCatDto } from './dto/create-girl-dto';

@Injectable()
export class GirlService {
  constructor(@InjectRepository(Girl) private girlRepo: Repository<Girl>) {}

  getGirls() {
    return this.girlRepo.find();
  }

  async addGirl({ name, age, skill }: CreateCatDto) {
    const girl = new Girl();
    girl.name = name;
    girl.age = age;
    girl.skill = skill;
    girl.timestamp = new Date().getTime();
    return this.girlRepo.save(girl);
  }

  updateGirl(id: string, data: { age: number }) {
    const girl = new Girl();
    girl.age = data.age;
    return this.girlRepo.update(id, girl);
  }

  deleteGirl(id: number) {
    if (!id) {
      console.error('参数不正确', `${id}: id`);
    }
    return this.girlRepo.delete(id);
  }

  getGirlByName(name: string): Promise<Girl[]> {
    return this.girlRepo.find({
      where: {
        // name: Like(`%${name}%`),
        name,
      },
      order: {
        name: 'asc',
        age: 'desc',
      },
    });
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
