import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;

  // későbbiekben használni akarom a user service template-ben, ezért publikusként kérem el
  // nem ajánlatos publikus változókat használni normális esetben
  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  logout()
  {
    // létre kell hozni a UserService-ben, eredetileg nem létezik
    this.userService.logout();
  }

}
