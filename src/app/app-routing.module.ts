/* ngmodule Dekorátor: ezzel írjuk le, hogy egy modult szeretnénk létrehozni */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { TicketDetailComponent } from './ticket/ticket-detail/ticket-detail.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import {ProfileComponent} from './user/profile/profile.component';
import {ProfileEditComponent} from './user/profile-edit/profile-edit.component';

// beépített Routes angular típust használjuk, megadjuk a route-okat az alkalmazás számára
// a route-ok sorrendje számít: ha a PageNotFoundComponent-et rakom elsőnek, akkor bármilyen
// url-re a 404 oldal fog bejönni, mert fentről ő az első, ez fut le.
// ha pl. 2 sorba írok home component-et, akkor mindig az első lesz érvényes, az fut le

const appRoutes: Routes = [
    // path + component, az adott URL-en elérni kívánt komponens megadása 
    {path: 'home', component: HomeComponent},
    // egy route-nak lehetnek child elemei, melyek tömbben adhatók meg
    {path: 'event',
    component: EventComponent,
    // ha children-t hozunk létre, nem szükséges a /event előtag(event/list), automatikusan elékerül
    children: [
        {path: 'list', component: EventListComponent},
        {path: ':id/edit', component: EventDetailComponent},
        {path: 'new', component: EventDetailComponent}  // new és editre is a detail komponenst használjuk
    ]},
    {path: 'ticket',
    component: TicketComponent,
    children: [
        {path: 'list', component: TicketListComponent},
        {path: 'new', component: TicketDetailComponent},
        {path: ':id/bid', component: TicketDetailComponent},
    ]},
    {path: 'about', component: AboutComponent},
    {path: 'user',
    children: [
        {path: '', component: ProfileComponent},
        {path: 'edit', component: ProfileEditComponent},
        {path: 'login', component: LoginComponent},
        {path: 'register', component: RegisterComponent},
    ]},
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
    // ahhoz, hogy az event.component html-ben használni tudjuk az event-list és detail komponenst,
    // importálni kell a routing file-ban + megadni a route-ot ahol meg akarjuk jelenítani
    // ha nincs megadva és enélkül használjuk a komponenseket, parse error-t kapunk (nálam működött újabb verzióban
    // úgy is, ha nem adtam meg ebben a fájlban... (??) )
    static routableComponents = [
        HomeComponent,
        EventComponent,
        EventListComponent,
        EventDetailComponent,
        TicketComponent,
        TicketListComponent,
        TicketDetailComponent,
        AboutComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        ProfileEditComponent,
        PageNotFoundComponent
    ];
}