import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  // 使用全局管道 校验参数
  app.useGlobalPipes(new ValidationPipe())

  const options = new DocumentBuilder()
    .setTitle('博客API') //  标题
    .setDescription('基于NestJS的博客API')  // 描述
    .setVersion('1.0')
    .addTag('NestJS', 'Blog restful api') // 添加标签
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document); //路径

  await app.listen(3000);
}
bootstrap();
