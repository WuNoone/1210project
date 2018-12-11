import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class FirstActiveGuard implements CanActivate {
    public build: boolean;
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.build) {
            console.log('a');
            return window.confirm('确认新建');
        } else {
            console.log('a');
            return true;
        }
      }
}
