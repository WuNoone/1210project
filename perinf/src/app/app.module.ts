import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { EditComponent } from './edit/edit.component';
import { ReverseComponent } from './reverse/reverse.component';
import { HomeComponent } from './home/home.component';
import { UnsaveGuard } from './reverse/reverse.guard';
import { FirstActiveGuard } from './first/firstActive.guard';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    EditComponent,
    ReverseComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UnsaveGuard,
    FirstActiveGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
