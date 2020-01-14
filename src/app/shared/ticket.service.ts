import { Injectable } from '@angular/core';
import { TicketModel } from './ticket-model';
import { EventService } from './event.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private _tickets: TicketModel[];

  constructor(private _eventService: EventService, private _userService: UserService) {
    /* feltöltjük mock adatokkal
    ticketModel-lekből álló tömb, new kulcsszóval példányosítom, majd a ticket-model.ts-ben az object.assign
    segítségével önmagára másolom a paramétereket */
    this._tickets = [
      new TicketModel({
        'id': 1,
        'date': '2018.05.02.',
      //  'artist': 'Iron Maiden',
        'numberOfTickets': 5,
        'minimalBidPrice': 2000,
        'bidStep': 500,
    //    'bidStartDate': '2017.11.15.',
    //    'bidEndDate': '2017.12.22.',
        'eventId': 1,
        'sellerUserId': 1
      }),
      new TicketModel({
        'id': 2,
        'date': '2019.05.02.',
        'numberOfTickets': 10,
        'minimalBidPrice': 2500,
        'bidStep': 500,
   //     'bidStartDate': '2018.12.15.',
  //      'bidEndDate': '2019.01.05.',
        'eventId': 1,
        'sellerUserId': 2
      }),
      new TicketModel({
        'id': 3,
        'date': '2016.12.10.',
   //     'artist': 'Holding Onto Hope',
        'numberOfTickets': 6,
        'minimalBidPrice': 2000,
        'bidStep': 300,
   //     'bidStartDate': '2016.03.01.',
   //     'bidEndDate': '2016.03.31.',
        'eventId': 1,
        'sellerUserId': 2
      }),
      new TicketModel({
        'id': 4,
        'date': '2018.08.20.',
   //     'artist': 'August Burns Red',
        'numberOfTickets': 15,
        'minimalBidPrice': 3000,
        'bidStep': 500,
    //    'bidStartDate': '2018.02.20.',
    //    'bidEndDate': '2018.03.10.',
        'eventId': 2,
        'sellerUserId': 3
      }),
      new TicketModel({
        'id': 5,
        'date': '2019.11.16.',
   //     'artist': 'Novelists',
        'numberOfTickets': 12,
        'minimalBidPrice': 3500,
        'bidStep': 200,
   //     'bidStartDate': '2019.01.01.',
    //    'bidEndDate': '2019.02.07.',
        'eventId': 3,
        'sellerUserId': 4
      }),
      new TicketModel({
        'id': 6,
        'date': '2019.11.08.',
   //     'artist': 'As I Lay Dying',
        'numberOfTickets': 25,
        'minimalBidPrice': 3500,
        'bidStep': 500,
    //    'bidStartDate': '2019.03.10.',
   //     'bidEndDate': '2019.04.20.',
        'eventId': 4,
        'sellerUserId': 5
      }),
      new TicketModel({
        'id': 7,
        'date': '2019.08.23.',
    //    'artist': 'August Burns Red',
        'numberOfTickets': 3,
        'minimalBidPrice': 3000,
        'bidStep': 500,
     //   'bidStartDate': '2018.12.25.',
     //   'bidEndDate': '2019.01.19.',
        'eventId': 5,
        'sellerUserId': 3
      }),
      new TicketModel({
        'id': 8,
        'date': '2019.05.02',
    //    'artist': 'Iron Maiden',
        'numberOfTickets': 5,
        'minimalBidPrice': 2000,
        'bidStep': 500,
    //    'bidStartDate': '2018.11.15',
   //     'bidEndDate': '2018.12.22',
        'eventId': 6,
        'sellerUserId': 6
      }),
      new TicketModel({
        'id': 9,
        'date': '2020.05.08.',
     //   'artist': 'Joe Satriani',
        'numberOfTickets': 30,
        'minimalBidPrice': 5000,
        'bidStep': 500,
      //  'bidStartDate': '2019.12.20.',
      //  'bidEndDate': '2020.01.31.',
        'eventId': 7,
        'sellerUserId': 4
      }),
    ];
  }

   getAllTickets() {
     return this._tickets.map( ticket => {
      return {
        /* bővült az event service és a user s ervice a get...ById eljárásokkal, mely az adott
        id-jú eventet és sellert adja vissza
        */

        // rest operatorral visszaadjuk egyenként az egyes ticket lemeket a this._tickets objektumból
        ...ticket,
        event: this._eventService.getEventById(ticket.eventId),
        seller: this._userService.getUserById(ticket.sellerUserId)
      }
    })
  }

  getEventById(id: number)
  {
    return this._eventService.getEventById(id).name;
  }

  // a már meglévő eventek mellé létrehozunk egy újat, legnagyobb id + 1 id-val
  create(param: TicketModel)
  {
    this._tickets = [
      ...this._tickets,
      new TicketModel({   // egy új ticketmodel-t példányosítok, az új id-val
        id: this._getMaxId() + 1,
        ...param,
        event: this._eventService.getEventById(param.eventId),
        seller: this._userService.getUserById(param.sellerUserId)
      })
    ];
    console.log(this._tickets);
  }

  private _getMaxId()
  {
    return this._tickets.reduce( (x,y) => x.id > y.id ? x : y).id + 1;
  }
}
