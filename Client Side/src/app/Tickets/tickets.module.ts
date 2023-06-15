import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TicketsComponent } from './tickets.component';
import { TicketPurchaseComponent } from './Components/ticket-purchase/ticket-purchase.component';
import { TicketsRoutingModule } from './tickets-routing.module';


@NgModule({
  declarations: [
    TicketsComponent,
    TicketPurchaseComponent
  ],
  imports: [
    CommonModule,RouterModule,TicketsRoutingModule
  ]
})
export class TicketsModule { }
