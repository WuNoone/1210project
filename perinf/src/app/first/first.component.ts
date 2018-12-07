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

  ngOnInit() {
  }

}
