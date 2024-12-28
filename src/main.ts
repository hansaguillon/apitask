import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // Configurar CORS
  app.enableCors({
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true, // Permitir el envío de credenciales (cookies, auth)
  });

 // Configurar el Swagger
 const config = new DocumentBuilder()
 .setTitle('API Task')
 .setDescription('Documentación de la API Task')
 .setVersion('1.0')
 .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('Docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
