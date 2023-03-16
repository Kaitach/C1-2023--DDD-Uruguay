import { IEventPublisher } from "../../../../../../../../../libs";
import { NameMangaModifiedEventPublisher } from './Modified-Name-event-publisher';
import { MangaDomainBase } from '../../../../entities/Order-domain/manga-domain-entity';

class EventPublisher extends NameMangaModifiedEventPublisher {}

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
    const topic = 'order-manga-name-modified-successfull';
    const response = new MangaDomainBase();
    const data = JSON.stringify({ data: response });
    eventPublisher.response = response;
    jest.spyOn(publisher, 'emit');

    // Act
    eventPublisher.publish();

    // Assert
    expect(publisher.emit).toBeCalledWith(topic, data);
  });
});