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

  onNavigated() {
    if (localStorage.getItem('information')) {
      this.router.navigate(['edit']);
    } else {
      this.router.navigate(['first']);
    }
  }
}
