import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import fs from 'fs';

/** The entry file of the application which uses the core function NestFactory to create a Nest application instance.*/
async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Nestjs Learning')
    .setDescription('Nestjs learning')
    .setVersion('1.0')
    .addTag('girl')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // https://stackoverflow.com/questions/51732236/generate-swagger-documentation-as-json-yaml-in-nestjs
  SwaggerModule.setup('/swagger', app, document, {
    jsonDocumentUrl: '/swagger.json',
  });

  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
