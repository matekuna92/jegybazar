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
 ///eredeti, a 2 ngFor előtt: public events: EventModel[];
  public eventsGrouppedBy3: EventModel[];

  // EventService-t elkéri a dependency injection-től az angular, az app.module-ban kötöttük be, és az 
  // event.model modellben megírt getAllEvents() metódust hívjuk meg, ami visszaadja az eseményeket
  constructor(private _eventService: EventService)
  {
  }

   /* a constructor akkor fut le, mikor létrejön az osztály,
      az ngOnInit pedig akkor, mikor már a teljes angularos környezet már rendelkezésre áll
      constructor esetén lehet olyan, hogy a service még nem készült el.. amit az onInit-be rakunk, 
      az már biztos, hogy létezik, mire ideér az angular */

    
    ngOnInit() {
      // visszaadja az egyenlőre teszt adattal feltöltött eseményeket
      // event.service.ts -ben van deklarálva a getAllEvents függvény
      /// eredeti, a 2 ngFor előtt: this.events = this._eventService.getAllEvents();

      /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
       initialValue paraméter []: ha nem adunk meg semmit a reduce-nak, akkor alapértelmezetten első futáskor
      a 0. és 1. elemet fogja venni. Ha megadjuk az utolsó paraméter initialValue-t, akkor az első elem elé
      ezt beszúrja. Itt egy []-t szúrunk be, ez fogja adni a külső [] keretet a tömbben, amibe a többi
	  tömb kerül majd 

	   */

	   // cél: [0,1,2,3,4,5,6,7,8] -> [ [0,1,2], [3,4,5], [6,7,8] ]

      this.eventsGrouppedBy3 = this._eventService.getAllEvents()
      .reduce( (acc, current: EventModel, index: number) => {
        if (index % 3 === 0)		// 0, 3, és 6 elemeknél 0 a maradék, ezeknél szeretnék új tömböt pusholni a külső tömbbe
        {
          acc.push([]);
        }
        acc[acc.length - 1].push(current); // aktuális elem tömbbe rakása
        return acc;
      }, []);

      console.log(this.eventsGrouppedBy3);
  }

}
