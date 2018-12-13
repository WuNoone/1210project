import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ParThreeServiceService } from './par-three-service.service';

@Component({
  selector: 'app-pra-three',
  templateUrl: './pra-three.component.html',
  styleUrls: ['./pra-three.component.css']
})
export class PraThreeComponent implements OnInit, OnDestroy {

  public date = new Date();

  constructor(private threeServer: ParThreeServiceService) { }

  private timingSubscription: Subscription;

  ngOnInit() {
    this.timingSubscription = interval(1000).subscribe(() => this.date = new Date());
  }

  ngOnDestroy() {
    this.timingSubscription.unsubscribe();
  }

}
