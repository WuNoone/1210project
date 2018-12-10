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
    const namevalue = (document.getElementsByName('name')[0] as HTMLInputElement).value;
    const sexvalue = (document.getElementsByName('sex')[0] as HTMLInputElement).value;
    const agevalue = (document.getElementsByName('age')[0] as HTMLInputElement).value;
    const telvalue = (document.getElementsByName('tel')[0] as HTMLInputElement).value;
    const addressvalue = (document.getElementsByName('address')[0] as HTMLInputElement).value;
    if (namevalue === '' || sexvalue === '' || agevalue === '' || telvalue === '' || addressvalue === '') {
      alert('内容不能为空！');
    } else {
      location.reload();
        localStorage.setItem('information', JSON.stringify(userInformation));
        console.log(userInformation);
    }
  }

  ngOnInit() {
  }

}
