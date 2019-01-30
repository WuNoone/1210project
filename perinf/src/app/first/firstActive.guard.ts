import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class FirstActiveGuard implements CanActivate {
    public build = true;
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.build === true) {
            console.log('a');
            // return window.confirm('确认新建');
            return true;
        } else {
            console.log('a');
            return true;
        }
    }
}
