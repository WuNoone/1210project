import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageNavComponent } from './manage-nav/manage-nav.component';
import { ManageLinksComponent } from './manage-links/manage-links.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';


const routes: Routes = [
  {
    path: '', component: ManageNavComponent, children:
      [{ path: 'manage-links', component: ManageLinksComponent },
      { path: 'manage-users', component: ManageUsersComponent }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
