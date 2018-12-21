import { Component, OnInit } from '@angular/core';
import { GlobalManageService } from '../global-manage.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.less'],
})
export class ManageUsersComponent implements OnInit {

  public dateFormat = 'yyyy/MM/dd';
  public monthFormat = 'yyyy/MM';
  public dataSet = this.globalService.dataSet;

  constructor(private globalService: GlobalManageService) { }

  ngOnInit() {
  }

  joinMove(id) {
    this.globalService.shareId = id ;
    if (this.globalService.dataSet[id].joinMove === '加入黑名单') {
      console.log(id);
      this.globalService.dataSet[id].serviceState = '黑名单';
      this.globalService.dataSet[id].joinMove = '移出黑名单';
    } else {
      this.globalService.dataSet[id].serviceState = '正常';
      this.globalService.dataSet[id].joinMove = '加入黑名单';
    }
  }

}
