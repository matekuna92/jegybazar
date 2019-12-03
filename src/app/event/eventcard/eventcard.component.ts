import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from '../../shared/event-model';

@Component({
  selector: 'app-eventcard',
  templateUrl: './eventcard.component.html',
  styleUrls: ['./eventcard.component.css']
})
export class EventcardComponent implements OnInit {
  // https://angular.io/guide/component-interaction
  // ennek a komponensnek már csak 1 kártya lesz a felelőssége, így nem tömböt adunk át, csak sima EventModel-t
  @Input() esemeny: EventModel

  constructor() { }

  ngOnInit() {
  }

}
