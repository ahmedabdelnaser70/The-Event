import { Component, Inject } from '@angular/core';
import { TicketPurchease } from './Model/TicketPurcheaseModel';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ticket } from '../events/Model/TicketModel';
import { Router } from '@angular/router';
import { TicketService } from '../events/Services/ticket.service';
import { CartserviseService } from './Services/cartservise.service';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  UserPurcheaseList:TicketPurchease[]=[]
  public payPalConfig?: IPayPalConfig;
  
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
  jwtHelper: any;
 constructor(
  @Inject(MAT_DIALOG_DATA) public data:{ticket:Ticket},
  public dialogRef: MatDialogRef<ShoppingCartComponent>,
  public ticketPurchaseSercvice:CartserviseService,
  public cartService:CartserviseService,
  public ticketService:TicketService,
  public router:Router){}
 

  ngOnInit(): void {
    this.initConfig();
  }
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'AYPbxj8WGcik-XuDy2KTmfYiTMu-zdoltjEky_ROA8L4E7Q5jyGjGZB-s14LRRRx3dl_ad7-Gne6dKYd',
      style:{
        label:'buynow',
        color:'gold',
        shape:'rect',
        layout:'horizontal'
      },
      createOrderOnClient: (d) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount:{
              currency_code:'USD',
              value:this.data.ticket.ticketPrice+""
            }
          }
        ]
      },
      onApprove:()=>{
        this.data.ticket.ticketQuentity=this.data.ticket.ticketQuentity-1
        this.ticketPurchase.purchaseDate=new Date().toISOString();
            this.ticketPurchase.ticketId=this.data.ticket.ticketId
            this.ticketPurchase.userId=this.extractUserIdFromToken()
            this.ticketPurchaseSercvice.postTicketPurchease(this.ticketPurchase).subscribe(
             TP=>
             {
               console.log(TP)
               this.ticketService.updateTicket(this.data.ticket.ticketId,this.data.ticket).subscribe(
                 d=>{
                   console.log("Updated")
                 }
                )
             }
            )
            this.dialogRef.close()
      }
  }
}
 cancel()
{
 this.dialogRef.close() 
}
extractUserIdFromToken(): string | null {
  const token = localStorage.getItem('token'); // Assuming the token is stored in local storage
  if (token) {
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken ? decodedToken.id : null;
  }
  return null;
}

}
