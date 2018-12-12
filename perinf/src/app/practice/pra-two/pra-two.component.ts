import { Component, OnInit } from '@angular/core';
import { MomentMoodServiceService } from './moment-mood-service.service';
import { GlobalMoodServiceService } from '../global-mood-service.service';

@Component({
  selector: 'app-pra-two',
  templateUrl: './pra-two.component.html',
  styleUrls: ['./pra-two.component.css']
})
export class PraTwoComponent implements OnInit {

  constructor(
    private momentServer: MomentMoodServiceService,
    private globalServer: GlobalMoodServiceService
    ) { }

  mommood = [];
  mood = [];
  num = 0;
  ngOnInit() {
    this.mood = this.globalServer.nullmood;
  }

  onBtnGlobal() {
    const random = Math.floor(Math.random() * 4);
    this.mood[this.globalServer.num] = this.globalServer.gmood[random];
    this.globalServer.num++;
  }

  onBtnMoment() {
    const random = Math.floor(Math.random() * 4);
    this.mommood[this.num] = this.momentServer.mood[random];
    this.num++;
  }
}
