import { Component, Inject } from '@angular/core';
import { CartserviseService } from './Services/cartservise.service';
import { TicketPurchease } from './Model/TicketPurcheaseModel';
import { TicketService } from '../events/Services/ticket.service';
import { Router } from '@angular/router';
import { CartService } from './Services/cartcount.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ticket } from '../events/Models/TicketModel';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  UserPurcheaseList:TicketPurchease[]=[]
  
  Total:number=0;
  ticketPurchase: TicketPurchease ={
    id: 0,
    purchaseDate: undefined,
    purchaseDetail: undefined,
    ticketId: undefined,
    userId: undefined,
    ticketType: '',
    ticketPrice: 0,
    userName: ''
  };
 constructor(
  @Inject(MAT_DIALOG_DATA) public data:{ticket:Ticket},
  public cartCount:CartService,
  public dialogRef: MatDialogRef<ShoppingCartComponent>,
  public ticketPurchaseSercvice:CartserviseService,
  public cartService:CartserviseService,
  public ticketService:TicketService,
  public router:Router){}
//  unbooKTicket( id:number,ticketId:number)
//  {
// this.cartService.deletePurchease(id).subscribe(
//   d=>
//   {
    
//     console.log(d)
//     console.log("done")
//     this.ticketService.getTicketById(ticketId).subscribe(
//       d=>{
//         d.ticketQuentity++
//         this.Total=this.Total-d.ticketPrice
//         this.ticketService.updateTicket(ticketId,d).subscribe(
//           p=>{
//             this.cartService.getPurchasesByUserID(1).subscribe(
//               d=>{
//                 this.UserPurcheaseList=d;
//                 localStorage.setItem("cart_count", JSON.stringify(this.UserPurcheaseList.length));
//               }
//             )
//           }
//         )
//       }
//      )
//   }
// )
  

// this.router.onSameUrlNavigation = 'reload';
// this.router.navigate(['/shoppingcart']);


//  }
 cancel()
{
 this.dialogRef.close() 
}
buyNow()
{ 
  this.data.ticket.ticketQuentity=this.data.ticket.ticketQuentity-1
   this.ticketPurchase.purchaseDate=new Date().toISOString();
       this.ticketPurchase.ticketId=this.data.ticket.ticketId
       this.ticketPurchase.userId=1
       this.ticketPurchaseSercvice.postTicketPurchease(this.ticketPurchase).subscribe(
        TP=>
        {
          console.log(TP)
          this.ticketService.updateTicket(this.data.ticket.ticketId,this.data.ticket).subscribe(
            d=>{
            }
           )
        }
       )
       this.dialogRef.close()
      
  
}
}

