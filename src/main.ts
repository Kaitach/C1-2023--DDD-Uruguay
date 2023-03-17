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
  .setDescription('API para una tienda de manga que sigue la estructura DDD. Este sistema tiene un agregado para manga en la orden, así como un agregado para crear clientes. El ID de la orden se pasa al agregado de ventas, que a su vez tiene una factura y un vendedor. La arquitectura del proyecto está diseñada para mantener la limpieza del código.')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, options);

SwaggerModule.setup('docs', app, document);

  app.startAllMicroservices(); 

}
bootstrap();
