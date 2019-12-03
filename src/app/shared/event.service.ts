import { Injectable } from '@angular/core';
import { EventModel } from './event-model';

// injectable dekorátor
@Injectable({
  providedIn: 'root'
})

// adattárolás
export class EventService {

  private _events: EventModel[]; // Array<EventModel> -> így is megadható!

  constructor() {
    this._events = [
      {
        'id': 1,
        'name': 'Sziget Fesztivál',
        'date': '2017-08-03',
        'pictureURL': 'assets/sziget.png',
        'description': 'Event description text'
      },
      {
        'id': 2,
        'name': 'Diótörő Balett',
        'date': '2017-11-23',
        'pictureURL': 'assets/diotoro.jpg',
        'description': 'Event description text'
      },
      {
        'id': 3,
        'name': 'Macskák Musical',
        'date': '2017-02-11',
        'pictureURL': 'assets/macskak.jpg',
        'description': 'Event description text'
      },
      {
        'id': 4,
        'name': 'Sziget Fesztivál',
        'date': '2017-08-03',
        'pictureURL': 'assets/sziget.png',
        'description': 'Event description text'
      },
      {
        'id': 5,
        'name': 'Diótörő Balett',
        'date': '2017-11-23',
        'pictureURL': 'assets/diotoro.jpg',
        'description': 'Event description text'
      },
      {
        'id': 6,
        'name': 'Macskák Musical',
        'date': '2017-02-11',
        'pictureURL': 'assets/macskak.jpg',
        'description': 'Event description text'
      },
      {
        'id': 7,
        'name': 'Sziget Fesztivál',
        'date': '2017-08-03',
        'pictureURL': 'assets/sziget.png',
        'description': 'Event description text'
      },
      {
        'id': 8,
        'name': 'Diótörő Balett',
        'date': '2017-11-23',
        'pictureURL': 'assets/diotoro.jpg',
        'description': 'Event description text'
      },
      {
        'id': 9,
        'name': 'Macskák Musical',
        'date': '2017-02-11',
        'pictureURL': 'assets/macskak.jpg',
        'description': 'Event description text'
      }
    ]
   }

  getAllEvents(): EventModel[]  // visszatérési érték típusa megadható (segítség, hogy biztos ilyen típust várjunk)
  {
    return this._events;  // visszatérési érték az osztály _events változója !
  }
}
