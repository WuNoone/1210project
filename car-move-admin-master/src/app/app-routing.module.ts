import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotImplementComponent } from './share/components/not-implement/not-implement.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuardService } from '../app/components/services/login-guard.service';
import { DefaultGuardService } from '../app/components/services/default-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardService] },
  { path: '', component: LoginComponent, pathMatch: 'full', canActivate: [DefaultGuardService] },
  {
    path: 'main', component: AppComponent, children: [
      { path: '', redirectTo: 'main-nav/main-home', pathMatch: 'full' },
      {
        path: 'main-nav',
        loadChildren: './share/components/main/main.module#MainModule'
      },
    ]
  },
  {
    path: 'link', component: AppComponent, children: [
      { path: '', redirectTo: 'generate-nav/links/links', pathMatch: 'full' },
      {
        path: 'generate-nav/links',
        loadChildren: './share/components/link/link.module#LinkModule'
      },
    ]
  },
  {
    path: 'management', component: AppComponent, children: [
      { path: '', redirectTo: 'manage-nav', pathMatch: 'full' },
      {
        path: 'manage-nav',
        loadChildren: './share/components/manage/manage.module#ManageModule'
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
