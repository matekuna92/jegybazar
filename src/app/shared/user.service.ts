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

  constructor(private _router: Router) {

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
    console.log('Bejelentkezve:', this.isLoggedIn); // elírt név/jelszó esetén false érték íródik ki
    // ha nem sikerült a navigálás
    return false;
  }

  logout()
  {
      delete(this._user); // user értéke ezzel undefined lesz // másik megoldás: this._user = new UserModel();
      this.isLoggedIn = false;
      this._router.navigate(['/home']);
      console.log('Bejelentkezve:', this.isLoggedIn);
  }

   // opcionális paraméter -> a komponensből kap egy usermodel-t, egyébként nincs paraméter
   // itt nem kell Object.assign, mert itt a konstruktor segítségével hozzuk létre az objektumot,
   // ezen keresztül másolunk új objektumba
   register(param?: UserModel)
   {
      if(param)
      {
        // ha kapunk paramétert, akkor feltöltjük a user-t
        this._user = new UserModel(param);
      }
      // egyébként teszt adat
      else
      {
        this._user = new UserModel(UserModel.exampleUser);
      }

      this.isLoggedIn = true;
      this._router.navigate(['/user']);
      console.log('Bejelentkezve:', this.isLoggedIn);
   }
}
