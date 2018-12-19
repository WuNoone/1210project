import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  panels = [
    {
      active: true,
      name: '生成链接',
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
