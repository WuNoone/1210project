import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  constructor(
  ) { }
  saveDate(name: string, sex: string, age: number, tel: number, address: string): void {
    // tslint:disable-next-line:prefer-const
    let namevalue = (document.getElementsByName('name')[0] as HTMLInputElement).value;
    // tslint:disable-next-line:prefer-const
    let sexvalue = (document.getElementsByName('sex')[0] as HTMLInputElement).value;
    // tslint:disable-next-line:prefer-const
    let agevalue = (document.getElementsByName('age')[0] as HTMLInputElement).value;
    // tslint:disable-next-line:prefer-const
    let telvalue = (document.getElementsByName('tel')[0] as HTMLInputElement).value;
    // tslint:disable-next-line:prefer-const
    let addressvalue = (document.getElementsByName('address')[0] as HTMLInputElement).value;
    if (namevalue === '' || sexvalue === '' || agevalue === '' || telvalue === '' || addressvalue === '') {
      alert('内容不能为空！');
    } else {
      const userInformation = {
        name: name,
        sex: sex,
        age: age,
        tel: tel,
        address: address,
      };
      location.reload();
        localStorage.setItem('information', JSON.stringify(userInformation));
        console.log(userInformation);
    }
    }

  ngOnInit() {
  }

}
