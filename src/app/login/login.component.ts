import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentYear = new Date().getFullYear();
  username: string;
  password: string;

  constructor(
    private authservice: AuthService
  ) { }

  ngOnInit(): void {
    this.username = 'admin';
    this.password = 'admin123';
  }

  login() {
    this.authservice.login(this.username, this.password);
  }

}
