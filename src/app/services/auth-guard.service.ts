import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { }

  /**
   * Activate news dashboard route on the basis of user logged in or not
   * @param route 
   * @param state 
   * @returns 
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if(route.url[0].path.includes('news')){
        if(localStorage.getItem('ACCESS_TOKEN')){
          return true;
        }
        return false;
      }
      return true;
  }
}
