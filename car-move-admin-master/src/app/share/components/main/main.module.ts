import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainLinkComponent } from './main-link/main-link.component';
import { MainWelcomeComponent } from './main-welcome/main-welcome.component';
import { ShareModule } from '../../share.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    ShareModule,
    NgZorroAntdModule
  ],
  declarations: [MainLinkComponent, MainWelcomeComponent]
})
export class MainModule { }
