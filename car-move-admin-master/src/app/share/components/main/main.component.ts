import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
