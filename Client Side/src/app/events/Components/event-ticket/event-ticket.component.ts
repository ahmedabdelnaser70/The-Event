import { TicketService } from '../../Services/ticket.service';
import { Ticket } from '../../Models/TicketModel';
import { ActivatedRoute } from '@angular/router';
import { TicketPurchease } from 'src/app/shoping-cart/Model/TicketPurcheaseModel';
import { CartserviseService } from 'src/app/shoping-cart/Services/cartservise.service';
import { Component,Inject } from '@angular/core';
import { CartService } from 'src/app/shoping-cart/Services/cartcount.service';
import { Observable, Subject } from 'rxjs';
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
  ticketPurchase:TicketPurchease=new TicketPurchease(0,"","","","","",0,"")
  
   constructor(
    @ Inject(CartService) public cartCount:CartService,
     public ticketService:TicketService,
    public activatatedRoute:ActivatedRoute,
    @Inject(CartserviseService)public ticketPurchaseSercvice:CartserviseService,
  ){
    
      
    
  }
     ngOnInit()
   {
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
            console.log(d);
          }
        )
      }
    )
        
   }
   bookTicket(ticket:Ticket)
   {
   
       ticket.ticketQuentity=ticket.ticketQuentity-1
       this.ticketPurchase.purchaseDate=new Date().toISOString();
       console.log(Date.now())
       this.ticketPurchase.ticketId=ticket.ticketId
       this.ticketPurchase.userId=1
       this.ticketPurchaseSercvice.postTicketPurchease(this.ticketPurchase).subscribe(
        TP=>
        {
          console.log(TP)
          this.ticketService.updateTicket(ticket.ticketId,ticket).subscribe(
            d=>{
              if(ticket.ticketType=="VIP")
              {
                this.vipTicket=d
              }
              if(ticket.ticketType=="Basic")
              {
                this.BasicTicket=d
              }
              if(ticket.ticketType=="Pro")
              {
                this.proTicket=d
              }
            }
           )
        }
       )
          
       this.cartCount.setCartCount(parseInt(localStorage.getItem("cart_count") ||"0")+1)

   }
 
}
