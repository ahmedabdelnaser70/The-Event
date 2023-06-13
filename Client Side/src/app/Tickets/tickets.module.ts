import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets.component';
import { TicketPurchaseComponent } from './Components/ticket-purchase/ticket-purchase.component';



@NgModule({
  declarations: [
    TicketsComponent,
    TicketPurchaseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TicketsModule { }
