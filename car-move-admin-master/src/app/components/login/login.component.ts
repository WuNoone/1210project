import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public data = {
    username: '',
    password: '',
  };
  hidden = false;
  constructor(
    private loginService: LoginService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  login() {
    const userInformation = {
      name: this.data.username,
      sex: this.data.password
    };
    if (this.data.username === this.loginService.username && this.data.password === this.loginService.password) {
      localStorage.setItem('information', JSON.stringify(userInformation));
      this.router.navigate(['main']);
    } else {
      this.hidden = true;
    }
  }

}
