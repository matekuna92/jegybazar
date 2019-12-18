import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // error message-t tároló változó
  public error: string;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }


  login(email: string, password: string)
  {
    // ha a konstruktorban nem kérjük el a service-t, akkor a this._userService service ismeretlen, nem lézeik
    // this._userService.login(email, password);
    // boolean-nal tér vissza(mindig false-sal a user service-ben), ha nem sikerült a navigálás,
    // akkor megjelenítjük az error msg-t
    if(!this._userService.login(email, password))
    {
      this.error = 'Rossz e-mail vagy jelszót adott meg.';
    }
  }

  clearError()
  {
    delete(this.error);
  }
}
