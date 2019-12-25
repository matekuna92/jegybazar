import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/user-model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // itt nem szükséges tömb, mert mindig csak 1 aktuális user lesz
  user: UserModel;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.user = this._userService.getCurrentUser();
  }

}
