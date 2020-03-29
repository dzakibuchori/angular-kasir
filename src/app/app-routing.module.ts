import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {Error404Component} from './error404/error404.component';
import {MenuComponent} from './menu/menu.component';
import {PaymentComponent} from './payment/payment.component';
import {AuthGuard} from './auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: Error404Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
