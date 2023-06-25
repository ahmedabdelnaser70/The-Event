import { Component } from '@angular/core';
import { Ticket } from '../../api/Ticket';
import { Tick } from 'chart.js';
import { TicketsService } from '../../service/tickets.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {
 SelectedTickets:Ticket[]=[]
 tickets:Ticket[]=[]
 ticket:Ticket={
   ticketId: 0,
   ticketType: '',
   ticketPrice: 0,
   ticketQuentity: 0,
   ticketDetails: '',
   eventId: 0,
   eventName: '',
   eventDate: undefined,
   eventTime: undefined,
   purchase: undefined
 }
 constructor(public ticketService:TicketsService){}
 ngOnInit()
 {
        this.ticketService.getTickets().subscribe(
          ticketsList=>{
            this.tickets=ticketsList
          }
        )
 }
 AddNewTicket()
 {

 }
 deleteSelectedTicket()
 {
  
 }
}
