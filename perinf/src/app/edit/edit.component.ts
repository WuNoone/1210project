import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirstActiveGuard } from '../first/firstActive.guard';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  edit: {
    name: '',
    sex: '男',
    age: '',
    tel: '',
    address: '',
  };

  constructor(private router: Router,
    private firstActive: FirstActiveGuard,
    private appComponent: AppComponent) { }

  ngOnInit() {
    const userJsonStr = localStorage.getItem('information');
    const userEntity = JSON.parse(userJsonStr);
    this.edit = userEntity;
    if (userEntity == null) {
      this.router.navigate(['first']);
    }
  }

  onInputSaveClick(): void {
    this.router.navigate(['reverse']);
  }

  onInputNewClick(): void {
    localStorage.clear();
    // this.firstActive.build = false;
    this.router.navigate(['first']);
    this.appComponent.show = true;
  }
}
