import { Injectable, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ParThreeServiceService implements OnInit {
  public num = 0;
  public start = '开始';
  public showStop = true;

  constructor() { }

  private continueSubscription: Subscription;

  onBtnStart() {
    this.showStop = false;
    if (this.start === '开始') {
      this.start = '暂停';
      this.continueSubscription = interval(1000).subscribe(() => this.num++);
    } else if (this.start === '暂停') {
      this.start = '继续';
      this.continueSubscription.unsubscribe();
    } else if (this.start === '继续') {
      this.start = '暂停';
      this.continueSubscription = interval(1000).subscribe(() => this.num++);
    }
  }

  onBtnStop() {
    this.showStop = true;
    this.num = 0;
    this.start = '开始';
    this.continueSubscription.unsubscribe();
  }

  ngOnInit() {
  }
}
