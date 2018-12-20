import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): any {

    if (state.url === '/main') {
      if (localStorage.getItem('information')) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    }
    return true;
  }
}
