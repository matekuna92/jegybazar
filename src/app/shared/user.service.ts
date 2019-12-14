import { Injectable } from '@angular/core';
import { UserModel } from './user-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // tároljuk egy változóban, hogy be van-e lépve a user
  isLoggedIn = false;
  private _user: UserModel;

  constructor() {

   }

  // login function
  login(email: string, password: string) {
    // most hardkódoljuk az emailt és jelszót
    if(email === 'angular' && password === 'angular')
    {
      // feltöltjük a _user-t a példa adatokkal, és az angular Router komponenst használva
      // átirányítjuk a /user oldalra a felhasználót
      this._user = new UserModel(UserModel.exampleUser);
      this.isLoggedIn = true;
      this._router.navigate(['/user']);
    }
    // ha nem sikerült a navigálás
    return false;
   }
}
