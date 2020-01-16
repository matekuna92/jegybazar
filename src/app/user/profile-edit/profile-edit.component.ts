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

  ngOnInit() {
    this.user = this._userService.getCurrentUser();
  }

  onSubmit()
  {
    // frissítjük a a user-ben a módosított adatokat 
    this._userService.updateUser(this.user);
    this._router.navigate(['/user']);
  }

}
