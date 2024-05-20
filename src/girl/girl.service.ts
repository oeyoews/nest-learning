import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Girl } from './entities/girl.entity';
import { GirlDto } from './dto/create-girl-dto';

@Injectable()
export class GirlService {
  /**
   * 构造函数，注入 Girl 实体的 Repository。
   * @param girlRepo - Girl 实体的 Repository。
   */
  constructor(@InjectRepository(Girl) private girlRepo: Repository<Girl>) {}

  /**
   * 获取所有女孩的信息。
   * @returns 所有女孩的信息。
   */
  getGirls() {
    return this.girlRepo.find();
  }

  /**
   * 添加新的女孩信息。
   * @param param0 - 新女孩的信息。
   * @returns 新添加的女孩信息。
   */
  async addGirl({ name, age, skill }: GirlDto) {
    const girl = new Girl();
    girl.name = name;
    girl.age = age;
    girl.skill = skill;
    girl.timestamp = new Date().getTime();
    return this.girlRepo.save(girl);
  }

  /**
   * 更新特定女孩的年龄信息。
   * @param id - 女孩的 id。
   * @param data - 更新的年龄信息。
   * @returns 更新后的女孩信息。
   */
  updateGirl(id: string, data: { age: number }) {
    const girl = new Girl();
    girl.age = data.age;
    return this.girlRepo.update(id, girl);
  }

  /**
   * 删除特定 id 的女孩信息。
   * @param id - 女孩的 id。
   * @returns 删除的结果。
   */
  deleteGirl(id: number) {
    if (!id) {
      console.error('参数不正确', `${id}: id`);
    }
    return this.girlRepo.delete(id);
  }

  /**
   * 根据姓名获取女孩的信息。
   * @param name - 女孩的姓名。
   * @returns 符合姓名要求的女孩信息。
   */
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

  /**
   * 根据 id 获取女孩的信息。
   * @param id - 女孩的 id。
   * @returns 符合 id 要求的女孩信息。
   */
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
