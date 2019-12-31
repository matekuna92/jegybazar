import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ngx-bootstrap collapse module a menü ikonhoz
import { CollapseModule, AlertModule } from 'ngx-bootstrap';
import { NavbarComponent } from './core/navbar/navbar.component';
import { JumbotronComponent } from './core/jumbotron/jumbotron.component';
import { EventcardComponent } from './event/eventcard/eventcard.component';
import { FooterComponent } from './core/footer/footer.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ProfileEditComponent } from './user/profile-edit/profile-edit.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BidComponent } from './ticket/bid/bid.component';
import { TicketDetailComponent } from './ticket/ticket-detail/ticket-detail.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { TicketComponent } from './ticket/ticket.component';
import { EventService } from './shared/event.service';
import { LoggedInGuard } from './shared/logged-in.guard';
import { UserService } from './shared/user.service';
import { TicketService } from './shared/ticket.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    EventcardComponent,
    FooterComponent,
    EventComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ProfileEditComponent,
    EventDetailComponent,
    EventListComponent,
    PageNotFoundComponent,
    AboutComponent,
    HomeComponent,
    BidComponent,
    TicketDetailComponent,
    TicketListComponent,
    TicketComponent,
    /* itt kötöm össze az app-routing.modul-t az app komponenssel:
    a declarations-ben minden komponenst felkell sorolni, viszont a komponenseket a routing-nál is
     fel kell sorolni, így a dupla felsorolás helyett létrehozunk egy routableComponent tömböt az
     app-routing-ban, és elegendő ezt megadni a declarations-ben */
     ...AppRoutingModule.routableComponents
  ],
  imports: [
    BrowserModule,
    // az app-routing-module-t úgy tudom összekötni az app-module-al, hogy importálni kell az app.module-ban
    // az AppRoutingModule-t
    AppRoutingModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    FormsModule             // event-detail component <form #eventForm="ngForm"> -hoz kell
  ],
  // providers-ben adhatom meg az elkészült service nevét használathoz
  // https://angular.io/guide/dependency-injection-providers
  // event-list component ts-ben EventService néven adom át paraméterként, ezzel tudom megadni, hogy melyik class
  // melyik service-t használja
  providers: [{ provide: EventService, useClass: EventService }, UserService, TicketService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
