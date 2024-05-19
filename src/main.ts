import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as emoji from 'node-emoji';
const chalk = require('chalk');

/** The entry file of the application which uses the core function NestFactory to create a Nest application instance.*/
async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule);

  // emojis
  const rocket = emoji.get('rocket');
  const book = emoji.get('unicorn');
  const pizza = emoji.get('pizza');

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
    explorer: true,
    useGlobalPrefix: false,
  });

  await app.listen(port);
  console.log('\n');
  console.log(
    chalk.blue(`${rocket} API is running on: ${await app.getUrl()}/api`),
  );
  console.log(
    chalk.cyan(
      `${book} Swagger JSON is running on: ${await app.getUrl()}/swagger.json`,
    ),
  );
  console.log(
    chalk.green.bold(
      `${pizza} Swagger is running on: ${await app.getUrl()}/swagger`,
    ),
  );
}

bootstrap();
