import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class PerservicesService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    if (state.url === '/first') {
      if (localStorage.getItem('information')) {
          return false;
      } else {
        return true;
      }
    } else if (state.url === '/edit' || state.url === '/reverse') {
      if (localStorage.getItem('information')) {
          return true;
      } else {
          return false;
      }
    }

    return true;
  }
}
