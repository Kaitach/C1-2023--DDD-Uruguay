import { Controller } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from '@nestjs/microservices';
import { EventMySqlEntity } from '../../persitence/databases/mysql';
import { EventService } from '../../persitence/services/event.service';

@Controller()
export class subscriberGeneric {

    constructor(private readonly eventService: EventService){}

  @EventPattern('order-name-modified-successfull')
  NameModifiedEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'order-name-modified-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);

    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
}
@EventPattern('order-phone-modified-successfully')
PhoneModifiedEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'order-phone-modified-successfully';
    event.createdAt = Date();

    this.eventService.registerEvent(event);
  console.log('----------------------');
  console.log('Data: ', data.data);
  console.log('Context: ', context);
  console.log('--------------------');


} @EventPattern('order-manga-name-modified-successfull')
NameMangaModifiedEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'order-manga-name-modified-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);
    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
} @EventPattern('order-manga-price-modified-successfull')
PrinceModifiedEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'order-manga-price-modified-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);
    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
} @EventPattern('order-manga-state-modified-successfull')
StateModifiedEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'reserve-management.customer-added';
    event.createdAt = Date();

    this.eventService.registerEvent(event);
    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
} @EventPattern('order-added-modified-successfull')
ClientAddEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'order-added-modified-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);
    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
} @EventPattern('order-added-modified-successfull')
OrderAddEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'order-added-modified-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);
    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
} @EventPattern('order-client-modified-successfull')
ClientObtainedEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'order-client-modified-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);
    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
} @EventPattern('order-delete')
DeleteOrderEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'order-delete';
    event.createdAt = Date();

    this.eventService.registerEvent(event);
    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
} @EventPattern('order-manga-get-successfull')
ClientModifiedEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'order-manga-get-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);
    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
}

 @EventPattern('order-client-modified-successfull')
MangaObtainedEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'order-client-modified-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);
    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
} @EventPattern('order-manga-modified-successfull')
MangaModifiedEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'order-manga-modified-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);
    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
} @EventPattern('order-modified-successfull')
OrderModifiedEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'order-modified-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);

    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
} @EventPattern('sale-bill-get-successfull')
BillObtainedEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'sale-bill-get-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);

    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
} @EventPattern('sale-total-modified-successfull')
TotalModifiedEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'sale-total-modified-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);
    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
} @EventPattern('sale-payment-modified-successfull')
PaymentMethodEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'sale-payment-modified-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);
    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
} @EventPattern('sale-seller-name-modified-successfull')
SellerNameModifiedEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'sale-seller-name-modified-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);
    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
}


@EventPattern('sale-added-sale-modified-successfull')
AddedSaleEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'sale-added-sale-modified-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);
    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
}
@EventPattern('sale-added-seller-modified-successfull')
AddedSellerEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'sale-added-seller-modified-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);

    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
}
@EventPattern('sale-seller-name-modified-successfull')
BillModifiedEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'sale-seller-name-modified-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);

    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
}
@EventPattern('sale-seller-modified-successfull')
SellerModifiedEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'sale-seller-modified-successfull';
    event.createdAt = Date();

    this.eventService.registerEvent(event);

    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
}
 @EventPattern('sale-sales-get-successful')
 SalesObtainedEventPublisher(@Payload() data: any, @Ctx() context: KafkaContext) {
    const event = new EventMySqlEntity();
    event.data = JSON.stringify(data);
    event.type = 'sale-sales-get-successful';
    event.createdAt = Date();

    this.eventService.registerEvent(event);

    console.log('----------------------');
    console.log('Data: ', data.data);
    console.log('Context: ', context);
    console.log('----------------------');

  
}






}

