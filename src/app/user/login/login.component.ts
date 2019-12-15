import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }


  login(email: string, password: string)
  {
    // ha a konstruktorban nem kérjük el a service-t, akkor a this._userService service ismeretlen, nem lézeik
    this._userService.login(email, password);
  }

}
