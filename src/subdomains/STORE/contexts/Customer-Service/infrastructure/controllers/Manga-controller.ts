


import { Controller, Body, Get, Put, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {  GetMangaCaseUse, UpdateMangaStockCaseUse, UpdateNameUseCase, UpdatePriceUseCase, UpdateStateUseCase } from '../../application';
import {
    IMangaModifiedEventPublisher,
  IMangaObtainedEventPublisher,
} from '../messaging/publisher/order';
import {  INameMangaModifiedEventPublisher, IPrinceModifiedEventPublisher, IStateModifiedEventPublisher } from '../messaging/publisher/order/manga';
import {  MangaService, OrderService } from '../persitence';
import { IGetMangaCommand } from '../utils/commands/order/IGetMangaCommand';
import { IUpdateMangaName } from '../utils/commands/order/IUpdateMangaName';
import { IupdateMangaPrice } from '../utils/commands/order/IupdateMangaPrice';
import { IUpdateMangaStockCommand } from '../utils/commands/order/IUpdateMangaStock';
import { IUpdateStateManga } from '../utils/commands/order/IUpdateStateManga';

@ApiTags('manga')
@Controller('manga')
export class mangaController {
  constructor(
    private readonly mangaService: MangaService,
    private readonly getMangaEventPublisher: IMangaObtainedEventPublisher,
    private readonly ModifiedMangaStockingEventPublisher: IMangaModifiedEventPublisher,
    private readonly NameMangaModifiedEventPublisher: INameMangaModifiedEventPublisher,
    private readonly IPrinceModifiedEventPublisher: IPrinceModifiedEventPublisher,
    private readonly IStateModifiedEventPublisher: IStateModifiedEventPublisher,
    private readonly orderService: OrderService,


  ) {}

/* A controller that is using a use case to get a manga. */

  @ApiOperation({summary: "Get id"})

  @Get(":id")
  getManga( @Param('id') id: string ) {
    const command =  new IGetMangaCommand
    command.MangaID = id;
    const useCase = new  GetMangaCaseUse (this.orderService,  this.getMangaEventPublisher)
    return useCase.execute(command)
    
  }

/* A decorator that is used to describe the operation of the method. */
  @ApiOperation({summary: "update stock"})

  @Put()
  updateMangaStock(@Body() command: IUpdateMangaStockCommand) {
    const useCase = new  UpdateMangaStockCaseUse (this.orderService,  this.ModifiedMangaStockingEventPublisher)
 
    return useCase.execute(command)
    
  }

  @ApiOperation({summary: "update  name"})

  @Put('UpdateMangaName')
  updateMangaName(@Body() command: IUpdateMangaName) {
    const useCase = new  UpdateNameUseCase(this.mangaService,  this.NameMangaModifiedEventPublisher)
    return useCase.execute(command)
    
  }
  
  @Put('UpdateMangaPrice')
  updateMangaPrice(@Body() command: IupdateMangaPrice) {
    const useCase = new  UpdatePriceUseCase (this.mangaService,  this.IPrinceModifiedEventPublisher)
    return useCase.execute(command)
    
  }
  
  @Put('UpdateMangaState')
  updateMangaState(@Body() command: IUpdateStateManga) {
    const useCase = new  UpdateStateUseCase (this.mangaService,  this.IStateModifiedEventPublisher)
    return useCase.execute(command)
    
  }

}




