import { UpdatePhoneClientCaseUse } from './../../application/use-cases/Order-Use-case/client-case-use/update-phone-client-case-use/update-phone-client-case-use';
import { Controller, Post, Body, Put, Get, Param } from '@nestjs/common';
import { AddCustomerCaseUse, UpdateNameClientCaseUse } from '../../application';
import {
  IClientAddEventPublisher,
  IClientOrderObtainedEventPublisher,
  INameModifiedEventPublisher,
  IPhoneModifiedEventPublisher,
} from '../messaging/publisher/order';
import { ClientService } from '../persitence/services/OrderServices/ClientService';
import { IupdatePhoneClient } from '../utils/commands/order/IupdatePhoneClient';
import { IUpdateNameClient } from '../utils/commands/order/IUpdateNameClient';
import { IaddClientCOmmand } from '../utils/commands/order/IaddClientCOmmand';
import { OrderService } from '../persitence';
import { IGetClientCommand } from '../utils/commands/order/IGet-Client-Command';
import { GetClientCaseUse } from '../../application/use-cases/Order-Use-case/get-client-case-use/get-client-case-use';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Client')
@Controller('Client')
export class ClientController {
  constructor(
    private readonly ClientService: ClientService,
    private readonly NameModifiedEventPublisher: INameModifiedEventPublisher,
    private readonly IPhoneModifiedEventPublisher: IPhoneModifiedEventPublisher,
    private readonly AddCustomerEventPublisher: IClientAddEventPublisher,
    private readonly orderService: OrderService,
    private readonly IClientOrderObtainedEventPublisher: IClientOrderObtainedEventPublisher,


  ) {}

  @ApiOperation ({summary: "update  name"})
  @Put('update-client-name')
  updateClientName(@Body() command: IUpdateNameClient) {
    const useCase = new UpdateNameClientCaseUse(
      this.ClientService,
      this.NameModifiedEventPublisher,
    );
    console.log(this.ClientService)
    useCase.execute(command);
  }

  @ApiOperation({summary: "update  phone"})

  @Put('update-client-phone')
  updateClientPhone(@Body() command: IupdatePhoneClient) {
    

    const useCase = new UpdatePhoneClientCaseUse(
      this.ClientService,
      this.IPhoneModifiedEventPublisher,
    );
    useCase.execute(command);
  }

  @ApiOperation({summary: "create customer"})

  @Post('create-Customer')
  createCustomer(@Body() command: IaddClientCOmmand) {
    const useCase = new AddCustomerCaseUse(
      this.orderService,
      this.AddCustomerEventPublisher,
    );
    return useCase.execute(command);
  }

  @ApiOperation({summary: "Get id"})

  @Get(':id')
  getClient(@Param('id') id: string ) {
    const command =  new IGetClientCommand
    command.ClientID = id;
    const useCase = new GetClientCaseUse(this.orderService, this.IClientOrderObtainedEventPublisher);
    return useCase.execute(command);
  }
}



