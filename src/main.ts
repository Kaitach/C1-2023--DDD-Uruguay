import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   app.listen(3000);
  
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'consumer',
      }
    },
  });

  const options = new DocumentBuilder()
  .setTitle('Manga Store')
  .setDescription('Documentacion de la manga store')
  .setVersion('1.0')
  .addTag('Manga Store')
  .build();
const document = SwaggerModule.createDocument(app, options);

SwaggerModule.setup('docs', app, document);

  app.startAllMicroservices(); 

}
bootstrap();
