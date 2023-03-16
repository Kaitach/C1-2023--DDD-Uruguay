import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { OrderAgregate } from "../../../../domain/aggregates";
import { OrderDomainEntityBase } from "../../../../domain/entities";
import { ClientObtainedEventPublisher, OrderAddEventPublisher } from "../../../../domain/events/publishers/order";
import { IRegisterOrder } from "../../../../domain/interfaces/commands/Order-commands/register.order-command";
import { RegisterdOrderResponse } from "../../../../domain/interfaces/responses/Order-Response";
import { IorderDomainService } from "../../../../domain/services";
import { IdOrdertValueObject } from "../../../../domain/value-objects";
import { IGetClientCommand } from "../../../../infrastructure/utils/commands/order/IGet-Client-Command";
import { GetClientCaseUse } from "../get-client-case-use";
import { GetMangaCaseUse } from "../get-manga-case-use";
import { MangaObtainedEventPublisher } from '../../../../domain/events/publishers/order/manga-obtained-event-publisher';

export class RegisterOrderCaseUse<
    Command extends IRegisterOrder = IRegisterOrder,
    Response extends RegisterdOrderResponse =  RegisterdOrderResponse

>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly OrderAgregate: OrderAgregate;
 

  

    constructor(
        
        private readonly orderService: IorderDomainService,
        private readonly RegisterOrderEventPublisher: OrderAddEventPublisher,  
        private readonly GetClientEventPublisher: ClientObtainedEventPublisher,
        private readonly GetMangaEventPublisher:MangaObtainedEventPublisher

           
    ) {
        super();
        
        this.OrderAgregate = new OrderAgregate({
            orderService,
            RegisterOrderEventPublisher, 
            GetClientEventPublisher,
            GetMangaEventPublisher
            
        })

       
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(
        command: Command
    ): Promise<OrderDomainEntityBase | null> {
        const entity = this.createEntityClientDomain(command);

        return this.exectueOrderAggregateRoot((await entity))
    }


    
    
 

    private async createEntityClientDomain(
        command: Command,
    ): Promise<OrderDomainEntityBase> {
        const GetClient = new GetClientCaseUse(this.orderService, this.GetClientEventPublisher)
        const responseClient =  await  GetClient.execute({ClientID: command.clientID})

        const GetManga = new GetMangaCaseUse(this.orderService, this.GetMangaEventPublisher)

        const responseManga =  await GetManga.execute({MangaID: command.MangaID})
      
        const orderId = new IdOrdertValueObject(command.idOrder);

        if (!responseClient  || !responseManga) 
        {  throw new ValueObjectException(
            'Error al obtener datos ',
            this.getErrors(),
        ); }

        return new OrderDomainEntityBase({
            Manga:  responseManga.data,
            client:  responseClient.data ,
            orderId: orderId.valueOf()
        })
    }



    private exectueOrderAggregateRoot(
        entity: OrderDomainEntityBase,
    ): Promise<OrderDomainEntityBase | null> {
        return this.OrderAgregate.RegisterOrder(entity)
    }
}