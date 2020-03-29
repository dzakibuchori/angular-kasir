import { Injectable } from '@angular/core';
import {Cart} from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart[] = [];
  constructor() { }

  getCart() {
    return this.cart;
  }

  addItem(menu) {
    for (const item of this.cart) {
      if (item.menu_id === menu.id) {
        item.qty++;
        return;
      }
    }

    const data = {
      id: this.cart.length > 0 ? this.cart[this.cart.length - 1].id + 1 : 1,
      menu_id: menu.id,
      title: menu.title,
      price: menu.price,
      qty: 1
    };
    this.cart.push(data);
  }

  removeItem(id: number) {
    const i = this.cart.findIndex(item => item.id === id);
    this.cart.splice(i, 1);
  }

  addQtyItem(id: number) {
    const i = this.cart.findIndex(item => item.id === id);
    this.cart[i].qty++;
  }

  subtractQtyItem(id: number) {
    const i = this.cart.findIndex(item => item.id === id);
    this.cart[i].qty > 0 ? this.cart[i].qty-- : console.log('');
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }
}
