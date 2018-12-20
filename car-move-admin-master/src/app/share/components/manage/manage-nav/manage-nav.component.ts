import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-nav',
  templateUrl: './manage-nav.component.html',
  styleUrls: ['./manage-nav.component.less']
})
export class ManageNavComponent implements OnInit {

  panels = [
    {
      active: true,
      name: '链接管理',
      disabled: false,
      router: 'manage-links'
    },
    {
      active: true,
      disabled: false,
      name: '用户管理',
      router: 'manage-users'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
