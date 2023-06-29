
import { ActivatedRoute, Router } from '@angular/router';
import { TicketPurchease } from 'src/app/shoping-cart/Model/TicketPurcheaseModel';
import { CartserviseService } from 'src/app/shoping-cart/Services/cartservise.service';
import { Component,Inject } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { ShoppingCartComponent } from 'src/app/shoping-cart/shopping-cart.component';
import { Ticket } from '../../Model/TicketModel';
import { TicketService } from '../../Services/ticket.service';
import { AuthService } from 'src/app/account/Services/auth.service';
@Component({
  selector: 'app-event-ticket',
  templateUrl: './event-ticket.component.html',
  styleUrls: ['./event-ticket.component.scss']
})
export class EventTicketComponent {
  vipTicket:Ticket=new Ticket(0,"",0,0,"",0,"","","","")
  proTicket:Ticket=new Ticket(0,"",0,0,"",0,"","","","")
  BasicTicket:Ticket=new Ticket(0,"",0,0,"",0,"","","","")
  eventTickets:any
  isLogIn=false
   constructor(
    public authentcationService:AuthService,
     public ticketService:TicketService,
    public activatatedRoute:ActivatedRoute,
    public router:Router,
    @Inject(CartserviseService)public ticketPurchaseSercvice:CartserviseService,
    @Inject(MatDialog) public dialog:MatDialog
  ){
    
      
    
  }
     ngOnInit()
   {
    this.isLogIn=this.authentcationService.isLoggedIn()
    this.activatatedRoute.params.subscribe(
      p=>{
        this.ticketService.getTicketsByEventId(p['id']).subscribe(
          d => {
            this.eventTickets = d;
            this.eventTickets.forEach((ticket:Ticket) => {
              if(ticket.ticketType=="VIP")
              {
                this.vipTicket=ticket
              }
              if(ticket.ticketType=="Basic")
              {
              this.BasicTicket=ticket
              }
              else
              {
               this.proTicket=ticket
              }
            });
          }
        )
      }
    )
        
   }
   bookTicket(ticket:Ticket)
   {
    if(this.isLogIn==true)
    {
      this.dialog.open(ShoppingCartComponent,{
        width:'35%',
        height:'40%'
        ,data:{ticket:ticket}
       
      
     })
    }
   else
   {
    this.router.navigate(['/account/login'])
   }

   }
 
}