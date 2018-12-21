import { Component, OnInit } from '@angular/core';
import { GlobalManageService } from '../global-manage.service';

@Component({
  selector: 'app-manage-links',
  templateUrl: './manage-links.component.html',
  styleUrls: ['./manage-links.component.less']
})
export class ManageLinksComponent implements OnInit {
  public dataSet = this.globalService.dataSet;
  public tel;
  public licensePlate;

  constructor(private globalService: GlobalManageService) { }

  ngOnInit() {
    console.log(this.dataSet);
    this.dataSet = this.globalService.dataSet;
  }

  onBtnQuery() {
    this.dataSet = [];
    for (let i = 0; i < this.globalService.dataSet.length; i++) {
      const telIndex = this.globalService.dataSet[i].tel.indexOf(this.tel);
      const brandIndex = this.globalService.dataSet[i].licensePlate.indexOf(this.licensePlate);
      console.log(telIndex);
      console.log(brandIndex);
      if (telIndex > -1 || brandIndex > -1) {
        this.dataSet.push(this.globalService.dataSet[i]);
      }
    }
  }

  onBtnReset() {
    this.tel = '';
    this.licensePlate = '';
    this.dataSet = this.globalService.dataSet;
  }

}
