import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainLinkComponent} from './main-link/main-link.component';
import {MainWelcomeComponent} from './main-welcome/main-welcome.component';

const routes: Routes = [
  {
    path: '', component: MainLinkComponent, children:
      [{path: 'main-home', component: MainWelcomeComponent}]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
