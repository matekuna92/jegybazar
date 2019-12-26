/* Service-ek esetén az adatokat egy egységbe szeretnénk zárni, ehhez class-t használunk...
Service mellé létrehoztunk egy eventModel class-t, ami az EGY elemi adategységhez tartozó dolgokat magába foglalja
eventService injectable + eventModel class */

export class EventModel {
    id?: number;
    name: string;
    date: string;   // date típussal érdemes élesben, most csak egyszerű módon tároljuk stringként
    pictureURL: string;
    description: string;

    // sok paraméter esetén hosszadalmas lenne beírni mindegyik esetén: this.id = id, stb,
    // ehelyett átadunk egy EventModel típusú paraméter, és ezt másoljuk át
    // "önmagára" a this-sel ! Így biztos, hogy a paraméter csak EventModel típusú lehet, és jók lesznek
    // a field értékek

    constructor(param: EventModel) {

        if ( param ) // vizsgáljuk, van-e átadott paraméter
        {
            Object.assign(this, param);  // célpont, forrás
        }
    }

    static get emptyEvent(): EventModel
    {
      return {
        // opcionálissá tettük a Modelben, a event-detail component-ben változik a <h3> szöveg az
        // id-tól függően 
       // id: 0,
        name: '',
        date: '',
        pictureURL: '',
        description: ''
      }
    }
}

// new EventModel(paraméterek) módon hívható majd meg
