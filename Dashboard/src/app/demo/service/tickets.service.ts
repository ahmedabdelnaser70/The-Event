import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../api/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  baseUrl="https://localhost:7106/api/Ticket"
  constructor( public http:HttpClient) {
   }
   public getTicketsByEventId(id:number)
   {
    return this.http.get<Ticket[]>("https://localhost:7106/api/eventtickets/"+id);
   }
   public updateTicket(id:number,ticket:Ticket)
   {
    return this.http.put<Ticket>(this.baseUrl+"/"+id,ticket)
   }
   public getTicketById(id:number)
   {
    return this.http.get<Ticket>(this.baseUrl+"/"+id);
   }
   public getTickets()
   {
    return this.http.get<Ticket[]>(this.baseUrl);
   }
}
