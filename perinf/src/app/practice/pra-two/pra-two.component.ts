import { Component, OnInit } from '@angular/core';
import { MomentMoodServiceService } from './moment-mood-service.service';
import { GlobalMoodServiceService } from '../global-mood-service.service';

@Component({
  selector: 'app-pra-two',
  templateUrl: './pra-two.component.html',
  styleUrls: ['./pra-two.component.css'],
  providers:  [ MomentMoodServiceService ]
})
export class PraTwoComponent implements OnInit {

  constructor(
    private momentServer: MomentMoodServiceService,
    private globalServer: GlobalMoodServiceService
    ) { }

  ngOnInit() {
  }

  onBtnGlobal() {
    const random = Math.floor(Math.random() * 10000);
    this.globalServer.onGlobalAdd(random);
  }

  onBtnMoment() {
    const random = Math.floor(Math.random() * 10000);
    this.momentServer.onMomentAdd(random);
  }
}
