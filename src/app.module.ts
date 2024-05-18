import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GirlModule } from './girl/girl.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      // host: 'chatapp.whrobv2.mongodb.net',
      // port: 27017,
      // entities: [],
      // https://stackoverflow.com/questions/56795035/connecting-to-mongodb-atlas-with-typeorm
      // synchronize: true,
      // url: 'mongodb+srv://root:root@localhost:27017/oeyoewsdb',
      // mongodb://root:root@localhost:27017/?directConnection=true&authSource=oeyoewsdb
      host: 'localhost',
      port: 27017,
      username: 'root',
      password: 'root',
      database: 'oeyoewsdb',

      // url: 'mongodb+srv://username:pwd@xxx.xxx.mongodb.net',
      // ssl: true,
      // database: 'oeyoews',
      logging: true,
      autoLoadEntities: true,
    }),
    GirlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
