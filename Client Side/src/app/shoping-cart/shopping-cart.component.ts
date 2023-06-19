import { Component } from '@angular/core';
import { CartserviseService } from './Services/cartservise.service';
import { TicketPurchease } from './Model/TicketPurcheaseModel';
import { TicketService } from '../events/Services/ticket.service';
import { Router } from '@angular/router';
import { CartService } from './Services/cartcount.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  UserPurcheaseList:TicketPurchease[]=[]
  
  Total:number=0;
 constructor(
  public cartCount:CartService,
  public cartService:CartserviseService, public ticketService:TicketService,public router:Router){}
 ngOnInit()
 {
   this.cartService.getPurchasesByUserID(1).subscribe(
    d=>{
      this.UserPurcheaseList=d;
      localStorage.setItem("cart_count", JSON.stringify(this.UserPurcheaseList.length));
      d.forEach((ticketpurchase:TicketPurchease)=>
      {
              this.Total+=ticketpurchase.ticketPrice
      })
    }
   )
 }
 unbooKTicket( id:number,ticketId:number)
 {
this.cartService.deletePurchease(id).subscribe(
  d=>
  {
    
    console.log(d)
    console.log("done")
    this.ticketService.getTicketById(ticketId).subscribe(
      d=>{
        d.ticketQuentity++
        this.Total=this.Total-d.ticketPrice
        this.ticketService.updateTicket(ticketId,d).subscribe(
          p=>{
            this.cartService.getPurchasesByUserID(1).subscribe(
              d=>{
                this.UserPurcheaseList=d;
                localStorage.setItem("cart_count", JSON.stringify(this.UserPurcheaseList.length));
              }
            )
          }
        )
      }
     )
  }
)
  
this.router.onSameUrlNavigation = 'reload';
this.router.navigate(['/shoppingcart']);


 }
}
