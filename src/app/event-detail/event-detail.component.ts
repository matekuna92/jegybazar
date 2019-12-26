import { Component, OnInit } from '@angular/core';
import { EventModel } from '../shared/event-model';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  // itt is osztályváltozóban tároljuk az aktuális event-et, mint a többi fájl esetén
  event: EventModel;

  constructor(private _route: ActivatedRoute, private _eventService: EventService) { }

  ngOnInit() {
    // snapshot.params.id módon is használható, de ekkor eltörhet a kód, ha nincs id -- params?.id -val javítható
    // ezért tömbös jelölést használunk

    // event service getEventById number típusú paramétert vár, ezért kasztolni kell
    // 1: parseInt
    // 2: +this._route.snapshot.params['id'] -> (pl. 3+5) összeadás operátor, ahol  az első tagot elhagytuk,
    // így a 2. tag a gyengén típusosság miatt automatikusan konvertálódik number-ré
    const evId = parseInt(this._route.snapshot.params['id']);

    // ha kapunk id-t a route-ból, akkor egy eventet szerkesztünk a listából(event/1/edit), ha nem,
    // akkor az "Új esemény létrehozása"-ra mentünk, és újat hozunk létre
    if(evId)
    {
      this.event = this._eventService.getEventById(evId);
      console.log('kaptunk eventId-t:', evId);
    }
    else
    {
      this.event = new EventModel(EventModel.emptyEvent);
      console.log('Nem kaptunk eventet, jöhet az emptyEvent');
    }


    console.log(evId);


  }

}
