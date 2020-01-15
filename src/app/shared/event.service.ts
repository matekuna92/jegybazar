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
        'name': 'Fezen',
        'date': '2018-06-23',
        'pictureURL': 'assets/fezen.jpg',
        'description': 'Event description text'
      },
      {
        'id': 5,
        'name': 'Rock Maraton',
        'date': '2019-07-12',
        'pictureURL': 'assets/rockmaraton.jpg',
        'description': 'Event description text'
      },
      {
        'id': 6,
        'name': 'Black Hat USA',
        'date': '2017-02-11',
        'pictureURL': 'assets/blackhat.jpg',
        'description': 'Event description text'
      },
      {
        'id': 7,
        'name': 'tedX Talk',
        'date': '2017-08-03',
        'pictureURL': 'assets/tedx.jpg',
        'description': 'Event description text'
      },
      {
        'id': 8,
        'name': 'AMTS - Nemzetközi Autó és Tuning Show',
        'date': '2019-03-20',
        'pictureURL': 'assets/amts.jpg',
        'description': 'Event description text'
      },
      {
        'id': 9,
        'name': 'InFest Milano',
        'date': '2017-06-20',
        'pictureURL': 'assets/infest.jpg',
        'description': 'Event description text'
      }
    ]
   }

  getAllEvents(): EventModel[]  // visszatérési érték típusa megadható (segítség, hogy biztos ilyen típust várjunk)
  {
    return this._events;  // visszatérési érték az osztály _events változója !
  }

  // a beadott id-ra visszatér az ehhez tartozó event-tel, ticket service-ben van használva a function
   // ha nincs ilyen, akkor az emptyEvent-tel, amit az EventModel-ben hoztunk létre
   // olyan tömbbel térünk vissza, ami vagy üres, vagy a megkapott id-jú event-et tartalmazza csak

  getEventById(id: number)
  {
    // Number-ként adtam meg, de a formból stringként jöttek, ezért kasztolás + operátorral
    // ott derült ki, amikor új ticket-et hoztam létre a form alapján, ekkor a create metódusban nem
    // jó az id, mert stringként kapta meg, így üres esemény névvel hozza létre a ticket-et
// debuggolás: Augury - hozzáadás utána a ticketDetailComponent-ben látszódik a tömb utolsó ticket eleménél, hogy
// az event objektum üres és nincs id-ja...

    const ev = this._events.filter(e => e.id === +id);
    // le kell kezelni azt az esetet, ha nem áll rendelkezésünkre adat
    return ev.length > 0 ? ev[0] : new EventModel(EventModel.emptyEvent);
  }

  update(param: EventModel)
  {
    // nem módosítjuk az eredetit, leképezés map-pal
    this._events = this._events.map( ev => {
      if(ev.id === param.id)  // az aktuális ev event id-ja egyezik a paraméterben megadott event id-val
      {
        return {...param};  // átmásolom a param-okat
      }
      else    // nem azon az elemen állok, amit módosítani szeretnék, akkor visszatérek onmagával
      {
        return ev;
      }

      // rövid alakban:
      // this._events = this._events.map( ev => {
      //   ev.id === param.id ? {...param} : ev);
    })
  }

  // create esetén nincs id, és nem is tudni, melyik lehet a max id, mert véletlen sorrendben is lehetnek
  create(param: EventModel)
  {
    this._events = [
      ...this._events,
      {
        // ez pont a bubble sort algoritmus, rövid alakban reduce-szal
        // összehasonlítom sorban az elemeket, mindig az aktuális 2 közül a nagyobbat veszem,
        // így a végén csak a legnagyobb id marad, +1 az új event számára
        id: this._getMaxId() + 1,
        ...param
      }
    ];
  }

  private _getMaxId()
  {
    return this._events.reduce( (x,y) => x.id > y.id ? x : y).id + 1;
  }
}
