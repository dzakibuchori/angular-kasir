import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart;

  constructor(
    private cartService: CartService
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

  addQty(id: number) {
    this.cartService.addQtyItem(id);
    this.cart = this.cartService.getCart();
  }

  subtractQty(id: number) {
    this.cartService.subtractQtyItem(id);
    this.cart = this.cartService.getCart();
  }

  remove(id: number) {
    this.cartService.removeItem(id);
    this.cart = this.cartService.getCart();
  }
}
