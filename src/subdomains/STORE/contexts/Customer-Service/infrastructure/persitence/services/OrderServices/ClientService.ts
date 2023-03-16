import { Injectable } from "@nestjs/common";
import { ClientMySqlService, ClientRepository } from "../../databases/mysql";


@Injectable()
export class ClientService extends ClientMySqlService { 
    
  constructor(private readonly clientRepository: ClientRepository) {
    super(clientRepository);
  }
 }

