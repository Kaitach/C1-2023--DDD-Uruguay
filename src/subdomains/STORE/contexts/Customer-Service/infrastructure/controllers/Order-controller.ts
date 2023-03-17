import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegisterOrderCaseUse} from '../../application';
import {
  IMangaObtainedEventPublisher,
  IOrderAddEventPublisher,
} from '../messaging/publisher/order';
import { IClientObtainedEventPublisher } from '../messaging/publisher/Sale';
import {  OrderService } from '../persitence';
import { IRegisterOrderCommand } from '../utils/commands/order/Iregister-order-comand';

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly GetClientEventPublisher: IClientObtainedEventPublisher,
    private readonly MangaObtainedEventPublisher:IMangaObtainedEventPublisher,
    private readonly registerOrderEventPublisher: IOrderAddEventPublisher,
    
  ) {}

  @ApiOperation({summary: "Create Order"})
  @Post('create-order')
  async orderRegister(@Body() command: IRegisterOrderCommand) {
    const useCase = new RegisterOrderCaseUse(
      this.orderService,
      this.registerOrderEventPublisher,
      this.GetClientEventPublisher,
      this.MangaObtainedEventPublisher
    );


    return await useCase.execute(command);
  }

  
}


