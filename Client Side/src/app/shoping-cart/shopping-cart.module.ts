import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [ShoppingCartComponent,],
  imports: [CommonModule, RouterModule, ShoppingCartRoutingModule,NgxPayPalModule],
})
export class ShopingCartModule {}
