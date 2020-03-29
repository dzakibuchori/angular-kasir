import { Component, OnInit } from '@angular/core';
import {MenuService} from '../services/menu.service';
import {Menu} from '../models/menu';
import {CartService} from '../services/cart.service';
import {Cart} from '../models/cart';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cart: Cart[];
  menus: Menu[];
  constructor(
    private menuService: MenuService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.showMenu();
  }

  showMenu() {
    this.menuService.getMenu()
      .subscribe(data => this.menus = data);
  }

  addToCart(menu) {
    this.cartService.addItem(menu);
    this.cart = this.cartService.getCart();
  }

}
