import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../shared/user-model';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  user: UserModel;

  constructor(private _userService: UserService,
              private _router: Router) {
  }

  /* amióta a regisztráció is ezt a komponents használja, "Cannot read property 'id' of undefined"
  errort kapunk, mert eddig a profile-edit oldalt csak bejelntkezve lehetett elérni, ekkor volt
  aktuális user id-val. Regisztrációkor nincs id, így hibát kapunk */
  ngOnInit() {
    this.user = this._userService.isLoggedIn ? this._userService.getCurrentUser() : new UserModel();

  }

  onSubmit()
  {
    // frissítjük a a user-ben a módosított adatokat
    // itt is kezelni kell mostmár a regisztráció miatt, hogy van-e id, vagy nincs
    if(this.user.id)
    {
      this._userService.updateUser(this.user);
    }
    else
    {
      this._userService.register(this.user);
    }

    this._router.navigate(['/user']);

    ///  this._userService.updateUser(this.user);
  /// this._router.navigate(['/user']);
  }
}
