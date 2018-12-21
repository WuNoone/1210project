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

    // tslint:disable-next-line:max-line-length
    if (state.url === '/main/main-nav/main-home' || state.url === '/link/generate-nav/links/links' ||
    state.url === '/link/generate-nav/links/links-history' || state.url === '/link/generate-nav/links/links' ||
    state.url === '/management/manage-nav/manage-users') {
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
