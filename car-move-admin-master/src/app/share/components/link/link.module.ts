import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkRoutingModule } from './link-routing.module';
import { GenerateLinksComponent } from './generate-links/generate-links.component';
import {ShareModule} from '../../share.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { ToGenerateLinksComponent } from './to-generate-links/to-generate-links.component';
import { LinksHistoryComponent } from './links-history/links-history.component';

@NgModule({
  imports: [
    CommonModule,
    LinkRoutingModule,
    ShareModule,
    NgZorroAntdModule
  ],
  declarations: [GenerateLinksComponent, ToGenerateLinksComponent, LinksHistoryComponent]
})
export class LinkModule { }
