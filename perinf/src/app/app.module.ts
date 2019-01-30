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
import { PracticeComponent } from './practice/practice.component';
import { PraOneComponent } from './practice/pra-one/pra-one.component';
import { PraTwoComponent } from './practice/pra-two/pra-two.component';
import { StringPiPipe } from './practice/pipes/string-pi.pipe';
import { PraThreeComponent } from './practice/pra-three/pra-three.component';
import { PraFourComponent } from './practice/pra-four/pra-four.component';
import { PraFiveComponent } from './practice/pra-five/pra-five.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    EditComponent,
    ReverseComponent,
    HomeComponent,
    PracticeComponent,
    PraOneComponent,
    PraTwoComponent,
    StringPiPipe,
    PraThreeComponent,
    PraFourComponent,
    PraFiveComponent,
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
