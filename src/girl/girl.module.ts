import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GirlController } from './girl.controller';
import { GirlService } from './girl.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Girl } from './entities/girl.entity';
import { CounterMiddleware } from 'src/counter/counter.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Girl])],
  controllers: [GirlController],
  providers: [GirlService],
})
export class GirlModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 局部中间件，只对当前模块有效
    // consumer.apply(CounterMiddleware).forRoutes(GirlController);
  }
}
