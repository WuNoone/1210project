import { Component, OnInit } from '@angular/core';
import { GlobalManageService } from '../global-manage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-edit',
  templateUrl: './manage-edit.component.html',
  styleUrls: ['./manage-edit.component.less']
})
export class ManageEditComponent implements OnInit {

  public dataSet = this.globalService.dataSet;
  public id: number;
  public link: any;
  public tel;
  public licensePlate: string;
  public state: boolean;
  constructor(
    private globalService: GlobalManageService,
    private routerinfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.routerinfo.snapshot.queryParams['id'];
    this.link = this.dataSet[this.id].link;
    this.tel = this.dataSet[this.id].tel;
    this.licensePlate = this.dataSet[this.id].licensePlate;
    this.state = this.dataSet[this.id].switchValue;
    console.log(this.id);
  }

  onBtnSave() {
    this.dataSet[this.id].link = this.link;
    this.dataSet[this.id].tel = this.tel;
    this.dataSet[this.id].licensePlate = this.licensePlate;
    this.dataSet[this.id].switchValue = this.state;
  }

}
