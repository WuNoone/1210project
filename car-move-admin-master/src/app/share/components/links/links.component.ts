import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.less']
})
export class LinksComponent implements OnInit {
  panels = [
    {
      active    : true,
      name      : '生成链接',
      childPanel: [
        {
          active: false,
          name  : 'This is panel header 1-1'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
