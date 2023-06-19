import { Component } from '@angular/core';
import { TicketPurchease } from 'src/app/shoping-cart/Model/TicketPurcheaseModel';
import { CartserviseService } from 'src/app/shoping-cart/Services/cartservise.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  cartTicketsNumber=    parseInt(localStorage.getItem("cart_count") ||"0")

}
