import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnsaveGuard } from './reverse.guard';

@Component({
  selector: 'app-reverse',
  templateUrl: './reverse.component.html',
  styleUrls: ['./reverse.component.css']
})
export class ReverseComponent implements OnInit {
  public data = {
    name: '',
    sex: '',
    age: null,
    tel: null,
    address: '',
  };
  constructor(private router: Router, private guard: UnsaveGuard) { }
  ngOnInit() {
    this.guard.whether = true;
    const userJsonStr = localStorage.getItem('information');
    const userEntity = JSON.parse(userJsonStr);
    this.data = userEntity;
  }
  OnSaveInputClick(name: string, sex: string, age: number, tel: number, address: string): void {
      const userInformation = {
        name: name,
        sex: this.data.sex,
        age: age,
        tel: tel,
        address: address,
      };
        localStorage.setItem('information', JSON.stringify(userInformation));
        console.log(userInformation);
        this.guard.whether = false;
        this.router.navigate(['edit']);
  }
  OnCancelInputClick(name: string, sex: string, age: number, tel: number, address: string): void {
    sex = this.data.sex;
    const userJsonStr = JSON.parse(localStorage.getItem('information'));
    // tslint:disable-next-line:max-line-length
    if (userJsonStr.name !== name || userJsonStr.sex !== sex || userJsonStr.age !== age || userJsonStr.tel !== tel || userJsonStr.address !== address) {
      this.router.navigate(['edit']);
    } else {
      this.router.navigate(['edit']);
      this.guard.whether = true;
      }
    }
}
