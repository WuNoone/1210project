import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { EditComponent } from './edit/edit.component';
// import { FirstComponent } from './first/first.component';

const routes: Routes = [
  // { path: 'first', component: FirstComponent },
  // { path: '', redirectTo: '/first', pathMatch: 'full' },
  // { path: 'edit', component: EditComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
