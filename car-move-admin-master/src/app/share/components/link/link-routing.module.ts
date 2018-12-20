import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GenerateLinksComponent} from './generate-links/generate-links.component';
import {ToGenerateLinksComponent} from './to-generate-links/to-generate-links.component';
import {LinksHistoryComponent} from './links-history/links-history.component';

const routes: Routes = [
  {
    path: '', component: GenerateLinksComponent, children:
      [
        {path: 'links', component: ToGenerateLinksComponent},
        {path: 'links-history', component: LinksHistoryComponent}
      ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkRoutingModule {
}
