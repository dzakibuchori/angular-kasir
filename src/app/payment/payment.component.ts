import { Component, OnInit } from '@angular/core';
import {Cart} from '../models/cart';
import {CartService} from '../services/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cart: Cart[];
  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  getTotalCart(): number {
    let total = 0;
    this.cart.forEach(el => {
      total += (el.qty * el.price);
    });
    return total;
  }

  clearCart() {
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }

}
