export class UserModel {
    id: number;
    name: string;
    email: string;
    address: string;
    dateOfBirth: string;
    gender: string;

    constructor(param?: UserModel)
    {
        // ha van paraméter, ismét önmagára másoljuk a param-ban megkapott értékeket
        if(param)
        {
            Object.assign(this, param);
        }
    }

    // statikus getter függvény -
    //meghívhatjuk, mint UserModel.exampleUser, ami visszaadja egy test user objektumot az adataival
    static get exampleUser(): UserModel {
        return {
            id: 0,
            name: 'Tst Name',
            email: 'test@email.com',
            address: 'Random Street 12',
            dateOfBirth: '1990.01.01',
            gender: 'Male'
        }
    }

    // üres user, a user service getUserById számára, ahol lekezeljük azt az esetet, ha nincs adat
    // ekkor az üres User legyen használva

    /* statikus getter-nél nincs szükség példányra, hanem magán a class-on meghívható az emptyUser
    user.service-ben: new UserModel(UserModel.emptyUser); --> magán a UserModel-en hívhatom meg! */
    static get emptyUser(): UserModel
    {
      return {
        id: 0,
        name: '',
        email: '',
        address: '',
        dateOfBirth: '',
        gender: ''
      }
    }
}
