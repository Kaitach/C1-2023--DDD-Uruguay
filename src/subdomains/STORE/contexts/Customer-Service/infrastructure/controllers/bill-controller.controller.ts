import { IPaymentMethodEventPublisher } from './../messaging/publisher/Sale/Bill/Payment-method-messaging-publisher';
import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { GetBillUseCase,  UpdatePaymentUseCase, UpdateTotalUseCase } from '../../application';
import { IupdatePaymentMethod } from '../utils/commands/sale/IupdatePaymentMethod';
import { BillService } from '../persitence/services/SaleServices/BillService';
import { SaleService } from '../persitence/services/SaleServices/SaleService';
import { IBillObtainedEventPublisher } from '../messaging/publisher/Sale/IBillObtainedEventPublisher';
import { IGetBill } from '../utils/commands/sale/IGetBill';
import { IupdateTotalcommand } from '../utils/commands/sale/IupdateTotal';
import { ITotalModifiedEventPublisher } from '../messaging/publisher/Sale/Bill/total-modified--messaging-publisher';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Bill')
@Controller('Bill')
export class BillControllerController {


    constructor(
        private readonly BillService: BillService,
        private readonly SaleService: SaleService,
        private readonly IBillObtainedEventPublisher:IBillObtainedEventPublisher,
        private readonly ITotalModifiedEventPublisher:ITotalModifiedEventPublisher,
        private readonly IPaymentMethodEventPublisher:IPaymentMethodEventPublisher

    
    
      ) {}

/* A controller that is using the Get method to get the id of the bill. */

    @ApiOperation({summary: "Get id"})
    @Get(':id')
    getBill(@Param('id') id: string ) {
      const command =  new IGetBill
      command.BillID = id;
      console.log(this.SaleService)
      const useCase = new  GetBillUseCase (this.SaleService,  this.IBillObtainedEventPublisher)
      return useCase.execute(command)
      
    }
/* A method that is using the Put method to update the total of the bill. */

/* A method that is using the Put method to update the total of the bill. */
    @ApiOperation({summary: "update total"})

    @Put('Bill-total')
    updateBillTotal(@Body() command: IupdateTotalcommand) {
      const useCase = new UpdateTotalUseCase(
        this.BillService,
        this.ITotalModifiedEventPublisher,
      );
      useCase.execute(command);
    }
  
/* A method that is using the Put method to update the payment method of the bill. */
    @ApiOperation({summary: "update payment Method"})

    @Put('Bill-Payment-Method')
    updateBillPyment(@Body() command: IupdatePaymentMethod) {
      const useCase = new UpdatePaymentUseCase(
        this.BillService,
        this.IPaymentMethodEventPublisher,
      );
      useCase.execute(command);
    }
  


}
