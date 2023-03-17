import { Controller, Get, Body, Post, Put, Param } from "@nestjs/common";
import { GetSalesListUseCase, RegisterSaleUseCase, UpdateNameSallerUseCase } from "../../application";
import { IUpdateNameSeller } from "../../domain/interfaces/commands";
import { IAddedSaleEventPublisher, ISalesObtainedEventPublisher } from "../messaging/publisher/Sale";
import { SaleService, SellerService } from "../persitence";
import { IGetSales } from "../utils/commands/sale/IGetSales";
import { IRegisterSaleCommand } from "../utils/commands/sale/IRegisterSale";
import { IAddedSellerEventPublisher } from '../messaging/publisher/Sale/added-seller-messaging-publisher';
import { ISellerObtainedEventPublisher } from "../messaging/publisher/Sale/Seller/ISellerObtainedEventPublisher";
import { IBillObtainedEventPublisher } from '../messaging/publisher/Sale/IBillObtainedEventPublisher';
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('Sale')
@Controller('Sale')
export class SaleController {


    constructor(
        private readonly SaleService: SaleService,
        private readonly ISalesObtainedEventPublisher: ISalesObtainedEventPublisher,
        private readonly IAddedSaleEventPublisher:  IAddedSaleEventPublisher,
        private readonly SellerService: SellerService,
        private readonly IAddedSellerEventPublisher:IAddedSellerEventPublisher,
        private readonly ISellerObtainedEventPublisher: ISellerObtainedEventPublisher,
        private readonly BillObtainedEventPublisher: IBillObtainedEventPublisher

      
    
    
      ) {}

    @ApiOperation({summary: "get id"})
    @Get(':id')
    getSale(@Param('id') id: string) {
      const command =  new IGetSales
      command.IdSale = id;
      const useCase = new  GetSalesListUseCase (this.SaleService,  this.ISalesObtainedEventPublisher)
      return useCase.execute(command)
      
    }
    @ApiOperation({summary: "Create Sale"})
    @Post()
    createSale(@Body() command: IRegisterSaleCommand) {
      const useCase = new RegisterSaleUseCase(
        this.SaleService,
        this.IAddedSaleEventPublisher,
        this.BillObtainedEventPublisher,
        this.ISellerObtainedEventPublisher
      );
      useCase.execute(command);
    }
    @ApiOperation({summary: "Update Seller name"})
    @Put('updateSellerName')
  updateSellerName(@Body() command: IUpdateNameSeller) {
    const useCase = new  UpdateNameSallerUseCase (this.SellerService,  this.IAddedSellerEventPublisher)
    return useCase.execute(command)
    
  }

  

}
