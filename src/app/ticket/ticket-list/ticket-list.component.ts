import { Component, OnInit } from '@angular/core';
import { TicketModel } from '../../shared/ticket-model';
import { TicketService } from '../../shared/ticket.service';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  // tároljuk a jegyeket a listához
  public tickets: TicketModel[];

  constructor(private _ticketService: TicketService, private _userService: UserService){
  }

  /* feltöltést ngOnInit-ben végezzük, nem constructorban, mert itt már biztos, hogy rendelkezésre áll az
  angular service */
  ngOnInit() {
    this.tickets = this._ticketService.getAllTickets();
    console.log(this.tickets);
  }

}
