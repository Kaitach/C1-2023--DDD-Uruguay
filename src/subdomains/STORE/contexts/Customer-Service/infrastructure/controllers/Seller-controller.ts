import { IAddedSellerEventPublisher } from './../messaging/publisher/Sale/added-seller-messaging-publisher';
import { Controller, Get, Body, Post, Param } from "@nestjs/common";
import { AddSallerUseCase,  GetSellerUseCase } from "../../application";
import { SaleService } from "../persitence";
import { SellerService } from '../persitence/services/SaleServices/SellerService';
import { IUpdateNameSellerName } from '../utils/commands/sale/IUpdateName';
import { IGetSeller } from '../utils/commands/sale/IGetSeller';
import { ISellerObtainedEventPublisher } from '../messaging/publisher/Sale/Seller/ISellerObtainedEventPublisher';
import { IAddsallerCommand } from '../utils/commands/sale/IAddsaller';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Seller')

@Controller('Seller')
export class SellerController {


    constructor(
        private readonly SaleService: SaleService,
        private readonly  SellerService: SellerService,
        private readonly  IAddedSellerEventPublisher : IAddedSellerEventPublisher ,
      private readonly  ISellerObtainedEventPublisher : ISellerObtainedEventPublisher ,
      private readonly  IUpdateNameSellerName:  IUpdateNameSellerName
        
    
    
      ) {}

      
   @ApiOperation({summary: "get id"})
    @Get(':id')
    getSale(@Param('id') id: string) {
      const command =  new IGetSeller
      command.SellerId = id;
      const useCase = new  GetSellerUseCase (this.SaleService,  this.ISellerObtainedEventPublisher)
      return useCase.execute(command)
      
    }
    @ApiOperation({summary: "create seller"})
    @Post()
    async createSeller(@Body() command: IAddsallerCommand) {
      const useCase = new AddSallerUseCase(
        this.SaleService,
        this.IAddedSellerEventPublisher,
      );
      console.log(command)
     return await useCase.execute(command);
    }



}
