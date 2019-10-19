/* ngmodule Dekorátor: ezzel írjuk le, hogy egy modult szeretnénk létrehozni */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { TicketComponent } from './ticket/ticket.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// beépített Routes angular típust használjuk, megadjuk a route-okat az alkalmazás számára
// a route-ok sorrendje számít: ha a PageNotFoundComponent-et rakom elsőnek, akkor bármilyen
// url-re a 404 oldal fog bejönni, mert fentről ő az első, ez fut le.
// ha pl. 2 sorba írok home component-et, akkor mindig az első lesz érvényes, az fut le

const appRoutes: Routes = [
    // path + component, az adott URL-en elérni kívánt komponens megadása 
    {path: 'home', component: HomeComponent},
    {path: 'event', component: EventComponent},
    {path: 'ticket', component: TicketComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    // ha nincs semmi megadva, akkor a home route legyen az alapértelmezett
    {path: '', redirectTo: '/home', pathMatch: 'full'},
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
        PageNotFoundComponent,
        EventComponent,
        TicketComponent,
        AboutComponent,
        LoginComponent,
        RegisterComponent
    ];
}