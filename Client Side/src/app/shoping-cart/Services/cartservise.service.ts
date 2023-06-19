import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TicketPurchease } from '../Model/TicketPurcheaseModel';
@Injectable({
  providedIn: 'root'
})
export class CartserviseService {

  baseUrl="https://localhost:7106/api/TicketPurchease"
  constructor(public http:HttpClient) { }
  public postTicketPurchease(ticketPurchease:any)
  {
       return this.http.post(this.baseUrl,ticketPurchease)
  }
  public getPurchasesByUserID(userId:number)
  {
    return this.http.get<TicketPurchease[]>(this.baseUrl)
  }
  public getPurchasesCountsByUserID(userId:number)
  {
    return this.http.get<TicketPurchease[]>(this.baseUrl)
  }
  public deletePurchease(id:number)
  {
    return this.http.delete<TicketPurchease>(this.baseUrl+"/"+id)
  }
 
}
