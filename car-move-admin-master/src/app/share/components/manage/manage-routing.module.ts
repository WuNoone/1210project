import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageNavComponent } from './manage-nav/manage-nav.component';
import { ManageLinksComponent } from './manage-links/manage-links.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageSeeComponent } from './manage-see/manage-see.component';
import { ManageEditComponent } from './manage-edit/manage-edit.component';

const routes: Routes = [
  {
    path: '', component: ManageNavComponent, children:
      [{ path: 'manage-links', component: ManageLinksComponent },
      { path: 'manage-users', component: ManageUsersComponent },
      { path: 'manage-see', component: ManageSeeComponent },
      { path: 'manage-edit', component: ManageEditComponent }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
