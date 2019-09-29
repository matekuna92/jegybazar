import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jegybazar';
  
  // átmozgatva a navbar component-be, miután komponensekre szedtük az appot 
  // isCollapsed = true;
}
