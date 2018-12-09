import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-reverse',
  templateUrl: './reverse.component.html',
  styleUrls: ['./reverse.component.css']
})
export class ReverseComponent implements OnInit {
  public data = {
    name: '',
    sex: '',
    age: '',
    tel: '',
    address: '',
  };
  constructor() { }

  ngOnInit() {
    const userJsonStr = localStorage.getItem('information');
    const userEntity = JSON.parse(userJsonStr);
    this.data = userEntity;
  }
  saveDate(name: string, sex: string, age: number, tel: number, address: string): void {
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
}
