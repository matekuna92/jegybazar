import { EventModel } from './event-model';
import { UserModel } from './user-model';



export class TicketModel {
  id?: number;
  date: string;
  numberOfTickets: number;
  minimalBidPrice: number;
  bidStep: number;
  eventId: number;
  event?: EventModel;
  sellerUserId: number;
  seller?: UserModel;

  constructor(param?: TicketModel)
  {
    Object.assign(this, param);
  }

  // kezelni kell az üres jegyet is, úgy mint az eventModel esetén
  // ehhez a többit viszont opcionálissá kell tenni fent, hogy elég legyen csak a lenti értékeket megadni
  // eredetihez képest közben kikerült az artist, és a bidDate html-ből is, model-ben is ki kell venni, hogy jó legyen az EmptyTicket
  static get emptyTicket(): TicketModel
  {
    return {
      date: '',
      numberOfTickets: 0,
      minimalBidPrice: 0,
      bidStep: 0,
      eventId: 0,
      sellerUserId: 0,
    };
  }
}
