import { Injectable, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { getLoggedInUser } from '../store/selector/app.selector';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class SessionTimeoutService {

  constructor(private injector: Injector, private store: Store) { }

  /**
   * This function set token in local storage after user login. This token is alive for 15 minutes
   * @param token 
   */
  public setToken(token: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
    setTimeout(() => {
      localStorage.removeItem('ACCESS_TOKEN');
      this.refreshToken();
    },900000);
  }

  /**
   * function to get access token 
   * @returns 
   */
  public getToken(): string {
    return localStorage.getItem('ACCESS_TOKEN');
  }

  /**
   * function to refresh token after every 15 minutes
   */
  public refreshToken(): void{
    const authService = this.injector.get<AuthServiceService>(AuthServiceService);
    this.store.select(getLoggedInUser).subscribe((data) => {
      if(data.isLoadingSuccess) {
        authService.loginUser({username: data.user.username, password: data.user.password});
      }
    })
  }
}
