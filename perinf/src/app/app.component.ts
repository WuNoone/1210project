import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  }
  title = '个人信息';
  // tslint:disable-next-line:use-life-cycle-interface
  // ngOnInit() {
  //   const userJsonStr = localStorage.getItem('information');
  //   const userEntity = JSON.parse(userJsonStr);
  //   console.log(userEntity);
  // }
  onNavigated() {
    if (localStorage.getItem('information')) {
      this.router.navigate(['edit']);
    } else {
      this.router.navigate(['first']);
    }
  }
}
