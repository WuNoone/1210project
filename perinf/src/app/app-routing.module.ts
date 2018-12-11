import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PerinfoComponent } from './perinfo/perinfo.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { ReverseComponent } from './reverse/reverse.component';
import { FirstComponent } from './first/first.component';
import { UnsaveGuard } from './reverse/reverse.guard';
import { FirstActiveGuard } from './first/firstActive.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'edit', component: EditComponent },
  { path: 'first', component: FirstComponent },
  { path: 'reverse', component: ReverseComponent, canDeactivate: [ UnsaveGuard ], canActivate: [FirstActiveGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
