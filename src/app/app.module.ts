import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ngx-bootstrap collapse module a menü ikonhoz
import { CollapseModule } from 'ngx-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { EventcardComponent } from './eventcard/eventcard.component';
import { FooterComponent } from './footer/footer.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BidComponent } from './bid/bid.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketComponent } from './ticket/ticket.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
