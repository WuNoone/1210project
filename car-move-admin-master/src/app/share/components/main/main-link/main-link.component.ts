import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-link',
  templateUrl: './main-link.component.html',
  styleUrls: ['./main-link.component.less']
})
export class MainLinkComponent implements OnInit {

  panels = [
    {
      active: true,
      name: '首页',
      childPanel: [
        {
          active: false,
          name: 'This is panel header 1-1'
        }
      ]
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
