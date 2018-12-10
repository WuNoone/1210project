import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

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
  constructor(private firstdata: AppComponent) { }

  ngOnInit() {
    const userJsonStr = localStorage.getItem('information');
    const userEntity = JSON.parse(userJsonStr);
    this.data = userEntity;
  }
  OnSavelInputClick(name: string, sex: string, age: number, tel: number, address: string): void {
    const whetherSave = confirm('是否保存？');
    if ( whetherSave === true) {
      const userInformation = {
        name: name,
        sex: this.data.sex,
        age: age,
        tel: tel,
        address: address,
      };
      location.reload();
        localStorage.setItem('information', JSON.stringify(userInformation));
        console.log(userInformation);
    }
  }
  OnCancelInputClick(name: string, sex: string, age: number, tel: number, address: string): void {
    sex = this.data.sex;
    const userJsonStr = JSON.parse(localStorage.getItem('information'));
    // tslint:disable-next-line:max-line-length
    if (userJsonStr.name !== name || userJsonStr.sex !== sex || userJsonStr.age !== age || userJsonStr.tel !== tel || userJsonStr.address !== address) {
      alert('数据以发生改变');
    } else {
      const whetherCancelSave = confirm('是否取消保存？');
      if ( whetherCancelSave === true ) {
        this.firstdata.fir = false;
        this.firstdata.ed = true;
        this.firstdata.re = false;
      }
    }
  }
}
