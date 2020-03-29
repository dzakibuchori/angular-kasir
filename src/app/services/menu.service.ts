import { Injectable } from '@angular/core';
import {Menu} from '../models/menu';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuUrl = 'http://localhost:3000/menus';

  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status},` +
        `body was : ${error.error}`
      );
    }

    return throwError(
      'Something bad happened; please try again later.'
    );
  }
  constructor(private http: HttpClient) { }

  getMenu() {
    return this.http.get<Menu[]>(this.menuUrl)
      .pipe(
        catchError(MenuService.handleError),
        retry(3)
      );
  }


}
