import { Injectable } from '@nestjs/common';

@Injectable()
export class GirlService {
  getGirls() {
    return {
      code: 200,
      data: [1, 2],
      msg: '列表请求成功',
    };
  }

  addGirl(data) {
    return {
      code: 200,
      data,
      msg: '添加成功',
    };
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

    return {
      code: 200,
      data: data[id - 1],
      msg: '获取成功',
    };
  }
}
