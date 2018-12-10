import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  edit: {};
  constructor(private firstComponent: AppComponent) { }

  ngOnInit() {
    const userJsonStr = localStorage.getItem('information');
    const userEntity = JSON.parse(userJsonStr);
    this.edit = userEntity;
  }
  OnInputSaveClick(): void {
    this.firstComponent.fir = false;
    this.firstComponent.ed = false;
    this.firstComponent.re = true;
  }
}
