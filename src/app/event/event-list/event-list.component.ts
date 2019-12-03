import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { EventModel } from '../../shared/event-model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  // nézetben szeretném majd használni az eseményeket, ezért létrehozunk egy lokális verziót is 
  public events: EventModel[];

  // EventService-t elkéri a dependency injection-től az angular, az app.module-ban kötöttük be, és az 
  // event.model modellben megírt getAllEvents() metódust hívjuk meg, ami visszaadja az eseményeket
  constructor(private _eventService: EventService) 
  {
      // visszaadja az egyenlőre teszt adattal feltöltött eseményeket
      // event.service.ts -ben van deklarálva a getAllEvents függvény
      this.events = this._eventService.getAllEvents();
      console.log(this);
   }

  ngOnInit() {
  }

}
