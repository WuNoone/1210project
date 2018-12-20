import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-generate-links',
  templateUrl: './generate-links.component.html',
  styleUrls: ['./generate-links.component.less']
})
export class GenerateLinksComponent implements OnInit {

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
