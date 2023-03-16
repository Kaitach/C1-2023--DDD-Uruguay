import { IEventPublisher } from "../../../../../../../../../libs";
import { ClientDomainBase } from '../../../../entities/Order-domain/client-domain-entity';
import { PhoneModifiedEventPublisher } from "./modified-Phone-event-publisher";

class EventPublisher extends PhoneModifiedEventPublisher {}

describe('GotClientEventPublisherBase', () => {
  let eventPublisher: EventPublisher;
  let publisher: IEventPublisher;

  beforeEach(async () => {
    publisher = { emit: jest.fn(),  send: jest.fn()} 
    eventPublisher = new EventPublisher(publisher);
  });

  it('event publisher no esta definido', () => {
    expect(eventPublisher).toBeDefined();
  });

  it('enviando evento', () => {
    // Arrange
    const topic = 'order-phone-modified-successfully';
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