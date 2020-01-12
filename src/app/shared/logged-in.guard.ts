import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})

// a guard egy CanActivate interface-t valósít meg, amely egy boolean értékkel tér vissza
export class LoggedInGuard implements CanActivate {

  // elkérjük a dependency injector-tól a UserService-t (kézzel írt konstruktor, nem tartalmazta generálás után)
  constructor(private _userService: UserService,
              private _router: Router,
              private _location: Location) {
  }

  // belépés után, ha a profil oldalán frissítem az oldalt cannot read name of undefined error,
  // mivel bejelentkezéskor kapom a nevet és jelszót, ha ráfrissítek, vagy belépés nélkül
  // írom be kézzel a /user/profile oldalt, akkor nem létezik név, ezért hibát dob
  // ezt javítja az authGuard, de önmagában nem működik, meg is kell adni az appRouting modul-ban, hogy
  // létre lett hozva, és használható
  // mivel ez egy service, az app.module-ban is meg kell adni, enélkül nem tud a létezéséről az angular,
  // nem elég az app routing-ban megadni az adott route-hoz, hiszen ekkor még nem ismert a service

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('AuthGuard#canActivate called');

    if(this._userService.isLoggedIn)
    {
      return true;
    }
    // navigálunk a home-ra, ha ráfrissítek a profil oldalon, és nincs jogosultság megnézni az adatlapot
    else
    {
     /// this._router.navigate(['/home']);

      /// Location service használata itt is, úgy, mint a ticket list-nél
      this._router.navigate([this._location.path()]);

    }
  }
}
