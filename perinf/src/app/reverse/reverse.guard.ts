import { CanDeactivate } from '@angular/router';
import { ReverseComponent } from './reverse.component';

export class UnsaveGuard implements CanDeactivate<ReverseComponent> {
    public whether = true;
    canDeactivate(component: ReverseComponent) {
        if ( this.whether === true ) {
            return window.confirm('是否离开？');
        } else {
            this.whether = true;
            return window.confirm('是否保存？');
        }
    }
}
