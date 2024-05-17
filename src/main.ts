import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/** The entry file of the application which uses the core function NestFactory to create a Nest application instance.*/
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const port = 3000;
  await app.listen(port);

  console.log('Application is running on: http://localhost:3000');
}

bootstrap();
