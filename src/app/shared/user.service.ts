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
  private _allUsers: UserModel[];

  constructor(private _router: Router) {    // profile-edit miatt szükséges a _user is! (updateUser)
    // mock adat a getUserById és a Ticket service-hez
    this._allUsers = [
    new UserModel({
      'id': 1,
      'name': 'Pista ba',
      'email': 'pistaba@pistaba.com',
      'address': 'pistaba lak 12',
      'dateOfBirth': '1900-01-01',
      'gender': 'male',
      'profilePictureUrl': 'http://3.bp.blogspot.com/-bUS0WbXC1YA/Uz0di05mS_I/AAAAAAAAQGg/u9o_g9VDTSg/s1600/pista_ba_animacio.jpg'
    }),
    new UserModel({
      'id': 2,
      'name': 'Marcsa',
      'email': 'marcsa@marcsa.hu',
      'address': 'marcsa var 42.',
      'dateOfBirth': '2000-01-01',
      'gender': 'female',
      'profilePictureUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nBubms8tp5EDXG6LBhVyy4AES2WCqceh674hyF6rNwjYoJ4ddQ'
    }),
    new UserModel({
      'id': 3,
      'name': 'Mezei Szilveszter',
      'email': 'mzx@mzx.hu',
      'address': 'namek',
      'dateOfBirth': '2199-02-01',
      'gender': 'male',
      'profilePictureUrl': 'https://www.pngitem.com/pimgs/m/41-415019_profile-man-male-free-picture-male-avatar-clipart.png'
    }),
  ]
  }

  // login function
  login(email: string, password: string) {
    // most hardkódoljuk az emailt és jelszót
    if(email === 'angular' && password === 'angular')
    {
      // feltöltjük a _user-t a példa adatokkal, és az angular Router komponenst használva
      // átirányítjuk a /user oldalra a felhasználót

      // this._user = new UserModel(UserModel.exampleUser);
      this._user = this._allUsers[2];
      this.isLoggedIn = true;
      /// this._router.navigate(['/user']);
      return true;
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

  updateUser(param: UserModel)
  {
    this._user = new UserModel(param);
  }

   // opcionális paraméter -> a komponensből kap egy usermodel-t, egyébként nincs paraméter
   // itt nem kell Object.assign, mert itt a konstruktor segítségével hozzuk létre az objektumot,
   // ezen keresztül másolunk új objektumba
   register(param?: UserModel)
   {
      if(param)
      {
          // ha kapunk paramétert, akkor feltöltjük a user-t
        /// eredeti kód  this._user = new UserModel(param);
        this._user = new UserModel({
          id: 4,
          ...param
        });

        this._allUsers = [
          ...this._allUsers,
          this._user
        ];
      }
      // egyébként teszt adat
      else
      {
        this._user = new UserModel(UserModel.exampleUser);
      }

      this.isLoggedIn = true;
   ///   this._router.navigate(['/user']);
   // ne itt navigáljunk, hanem majd login-nál, ha jó adatokkal lép be a user
      console.log('Bejelentkezve:', this.isLoggedIn);
   }

   // a beadott id-ra visszatér az ehhez tartozó user-rel, ticket service-ben van használva a function
   // ha nincs ilyen, akkor a példaUser-rel, amit a UserModel-ben hoztunk létre
   // olyan tömbbel térünk vissza, ami vagy üres, vagy a megkapott id-jú usert tartalmazza csak

   getUserById(id: number)
   {
     // Number-ként adtam meg, de a formból stringként jöttek, ezért kasztolás + operátorral: üres oszlopok jelentek meg
      const user = this._allUsers.filter(u => u.id === +id);
      return user.length > 0 ? user[0] : new UserModel(UserModel.emptyUser);

      // itt kezeljük le azt az esetet, ha nincs adat, ekkor az emptyUser objektumot használjuk a példányosításhoz
   }

   getCurrentUser()
   {
     return this._user;
   }
}
