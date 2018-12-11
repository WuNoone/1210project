import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirstActiveGuard } from '../first/firstActive.guard';

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
    private firstActive: FirstActiveGuard) { }

  ngOnInit() {
    const userJsonStr = localStorage.getItem('information');
    const userEntity = JSON.parse(userJsonStr);
    this.edit = userEntity;
    if ( userEntity == null) {
      this.router.navigate(['first']);
    }
  }
  OnInputSaveClick(): void {
    this.router.navigate(['reverse']);
  }
  OnInputNewClick(): void {
    localStorage.clear();
    this.firstActive.build = true;
    this.router.navigate(['first']);
  }
}
