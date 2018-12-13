import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ParThreeServiceService } from './par-three-service.service';

@Component({
  selector: 'app-pra-three',
  templateUrl: './pra-three.component.html',
  styleUrls: ['./pra-three.component.css']
})
export class PraThreeComponent implements OnInit {

  public date = new Date();
  // public num = 0;
  // public start = '开始';
  constructor(private threeServer: ParThreeServiceService) { }

  // private continueSubscription: Subscription;

  // onBtnStart() {
  //   if (this.start === '开始') {
  //     this.start = '暂停';
  //     this.continueSubscription = interval(1000).subscribe(() => this.num++);
  //   } else if (this.start === '暂停') {
  //     this.start = '继续';
  //     this.continueSubscription.unsubscribe();
  //   } else if (this.start === '继续') {
  //     this.start = '暂停';
  //     this.continueSubscription = interval(1000).subscribe(() => this.num++);
  //   }
  // }

  // onBtnStop() {
  //   this.num = 0;
  //   this.start = '开始';
  //   this.continueSubscription.unsubscribe();
  // }

  ngOnInit() {
    const datetime = interval(1000);
    datetime.subscribe(() => this.date = new Date());
  }

}
