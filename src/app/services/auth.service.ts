import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private cookie: CookieService,
    private router: Router
  ) { }

  login(username, password) {
    if (username === 'admin' && password === 'admin123') {
      this.cookie.set('token', 'daslouewiunnvaihiufeiw' );
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.cookie.delete('token');
    this.router.navigate(['/login']);
  }

  isLogin() {
    return this.cookie.get('token');
  }
}
