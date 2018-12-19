import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotImplementComponent } from './share/components/not-implement/not-implement.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuardService } from '../app/components/services/login-guard.service';
import { DefaultGuardService } from '../app/components/services/default-guard.service';
import { MainComponent } from './share/components/main/main.component';
import { LinksComponent } from './share/components/links/links.component';
import { AdminComponent } from './share/components/admin/admin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardService] },
  { path: '', component: LoginComponent, pathMatch: 'full', canActivate: [DefaultGuardService] },
  {
    path: '', component: AppComponent, children: [
      { path: '', redirectTo: '/main', pathMatch: 'full' },
      {
        path: 'main',
        component: MainComponent, canActivate: [LoginGuardService]
      },
      {
        path: 'link',
        component: LinksComponent, canActivate: [LoginGuardService]
      },
      {
        path: 'management',
        component: AdminComponent, canActivate: [LoginGuardService]
      },
      { path: '**', redirectTo: '/main/home', pathMatch: 'full' },
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
