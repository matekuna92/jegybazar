/* ngmodule Dekorátor: ezzel írjuk le, hogy egy modult szeretnénk létrehozni */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// beépített Routes angular típust használjuk, megadjuk a route-okat az alkalmazás számára
const appRoutes: Routes = [
    // path + component, az adott URL-en elérni kívánt komponens megadása 
    {path: 'home', component: HomeComponent},
    // *: minden egyéb url-re a page not found komponens jelenjen meg
    {path: '**', component: PageNotFoundComponent}
];

// dekorátor, amivel megmondjuk, hogy szeretnénk létrehozni angularon belül egy modult
@NgModule({
    // RouterModule a routerlink létrehozásához
    // forRoot metódussal megadhatunk konfigurációt, ami a modul létrejöttekor érvényesül,
    // ezzel a konfiggal jön létre a modul
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule
{
    static routableComponents = [
        HomeComponent,
        PageNotFoundComponent
    ];
}