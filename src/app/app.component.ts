import { Component } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jegybazar';

  // miután rátettük a loggedInGuard-ot az event list és ticket route-okra, mindig külön be kellett
  // jelentkezni mielőtt megnézhettük volna.. ezt most ideiglenesen megkerülve automatikusan belépünk
 /* constructor(private _userService: UserService)
  {
    this._userService.login('angular', 'angular');
  }
  */

  // átmozgatva a navbar component-be, miután komponensekre szedtük az appot
  // isCollapsed = true;
}
