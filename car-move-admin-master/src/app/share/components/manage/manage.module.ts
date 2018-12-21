import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageNavComponent } from './manage-nav/manage-nav.component';
import { ManageLinksComponent } from './manage-links/manage-links.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ShareModule } from '../../share.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ManageSeeComponent } from './manage-see/manage-see.component';
import { ManageEditComponent } from './manage-edit/manage-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ManageRoutingModule,
    ShareModule,
    NgZorroAntdModule
  ],
  declarations: [ManageNavComponent, ManageLinksComponent, ManageUsersComponent, ManageSeeComponent, ManageEditComponent]
})
export class ManageModule { }
