import { ClientDomainService } from '../../../../../domain/services/Client-domain-service';
import { ClientEntityDB } from '../entities/Client-entity-db';
import { ClientRepository } from '../repositories/Client-Repository';

export class ClientMySqlService implements ClientDomainService<ClientEntityDB> {

constructor(private readonly ClientRepository: ClientRepository){}

   async  UpdateClientName(data: ClientEntityDB): Promise<ClientEntityDB> {
        console.log(data)

    return await this.ClientRepository.update(data.ClientID, data)    }

    async UpdateClientPhone(data: ClientEntityDB): Promise<ClientEntityDB> {
        console.log(data)
        return await this.ClientRepository.update(data.ClientID, data );
    }
}