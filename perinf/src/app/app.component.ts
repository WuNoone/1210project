import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private router: Router) {
  }

  show = false;

  ngOnInit() {
    if (localStorage.getItem('information')) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  onNavigated() {
    if (localStorage.getItem('information')) {
      this.router.navigate(['edit']);
    } else {
      this.router.navigate(['first']);
    }
  }
}
