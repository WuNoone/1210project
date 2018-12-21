import { Component, OnInit } from '@angular/core';
import { GlobalManageService } from '../global-manage.service';

@Component({
  selector: 'app-manage-see',
  templateUrl: './manage-see.component.html',
  styleUrls: ['./manage-see.component.less']
})
export class ManageSeeComponent implements OnInit {

  public dataSet = this.globalService.dataSet;

  constructor(private globalService: GlobalManageService) { }

  ngOnInit() {
  }

}
