import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '个人信息';
  fir = false;
  ed = false;
  re = false;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    const userJsonStr = localStorage.getItem('information');
    const userEntity = JSON.parse(userJsonStr);
    console.log(userEntity);
    if (userEntity == null) {
      this.fir = true;
      this.ed = false;
      this.re = false;
    } else {
      this.fir = false;
      this.ed = true;
      this.re = false;
    }
  }
}
