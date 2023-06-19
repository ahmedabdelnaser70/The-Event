import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class CartService {
    
  private cartCount = new ReplaySubject<number>(1);
  cartCount$ = this.cartCount.asObservable();
  setCartCount(count: number) {
    localStorage.setItem("cart_count", JSON.stringify(count));
    this.cartCount.next(count);
  }
}