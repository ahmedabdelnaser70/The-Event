
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket.component';
import { PostedEventTicketComponent } from './components/posted-event-ticket/posted-event-ticket.component';


@NgModule({
  declarations: [
 TicketComponent,
 PostedEventTicketComponent,
 

  ],
  imports: [
    CommonModule,
   
  ]
})
export class TicketModule { }
