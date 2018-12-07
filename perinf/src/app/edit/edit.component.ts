import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  edit: {};
  constructor(private firstdata: AppComponent) { }

  ngOnInit() {
    const userJsonStr = localStorage.getItem('information');
    const userEntity = JSON.parse(userJsonStr);
    this.edit = userEntity;
  }
  reversesave(): void {
    this.firstdata.fir = false;
    this.firstdata.ed = false;
    this.firstdata.re = true;
    console.log(this.firstdata.fir);
  }
}
