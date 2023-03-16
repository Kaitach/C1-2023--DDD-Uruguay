import { IEventPublisher } from "../../../../../../../../../libs";
import { ClientDomainBase } from '../../../../entities/Order-domain/client-domain-entity';
import { NameModifiedEventPublisher } from './Modified-Name-event-publisher';

class EventPublisher extends NameModifiedEventPublisher {}

describe('GotClientEventPublisherBase', () => {
  let eventPublisher: EventPublisher;
  let publisher: IEventPublisher;

  beforeEach(async () => {
    publisher = { emit: jest.fn(),  send: jest.fn()} 
    eventPublisher = new EventPublisher(publisher);
  });

  it('should be defined', () => {
    expect(eventPublisher).toBeDefined();
  });

  it('should emit event', () => {
    // Arrange
    const topic = 'order-name-modified-successfully';
    const response = new ClientDomainBase();
    const data = JSON.stringify({ data: response });
    eventPublisher.response = response;
    jest.spyOn(publisher, 'emit');

    // Act
    eventPublisher.publish();

    // Assert
    expect(publisher.emit).toBeCalledWith(topic, data);
  });
});