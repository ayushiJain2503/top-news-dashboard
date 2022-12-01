import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../interfaces';
import { loginFailure, loginSuccess, registerFailure, registerSuccess } from '../store/action';
import { HttpService } from './http.service';
import { SessionTimeoutService } from './session-timeout.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpService: HttpService, private sessionService: SessionTimeoutService, private router: Router, private store: Store) { }

  /**
   * Function to login user and then update store
   * @param user 
   */
  public loginUser(user: User): void {
    this.httpService.loginUser(user).pipe(
      catchError(err => {
        return throwError(err);
    })
    ).subscribe((res) => {
        this.store.dispatch(loginSuccess());
        this.sessionService.setToken(res['access_token']);
        this.router.navigate(['news']);
    }, (err: HttpErrorResponse) => {
      this.store.dispatch(loginFailure(err.error));
    });
  }

  /**
   * function to register user and then update store
   * @param user 
   */
  public registerUser(user: User): void {
    this.httpService.registerUser(user).pipe(
      catchError(err => {
        return throwError(err);
    })
    ).subscribe((res) => {
        this.store.dispatch(registerSuccess());
        this.sessionService.setToken(res['access_token']);
        this.router.navigate(['news']);
    }, (err: HttpErrorResponse) => {
      this.store.dispatch(registerFailure(err.error));
    });
  }
}
