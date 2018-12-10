import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  constructor(
  ) { }
  data = {
    name: '',
    sex: '男',
    age: '',
    tel: '',
    address: '',
  };
  saveDate(name: string, sex: string, age: number, tel: number, address: string): void {
    const userInformation = {
      name: this.data.name,
      sex: this.data.sex,
      age: age,
      tel: tel,
      address: address,
    };
      location.reload();
        localStorage.setItem('information', JSON.stringify(userInformation));
        console.log(userInformation);
  }
  ngOnInit() {
  }

}
