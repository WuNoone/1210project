import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalMoodServiceService {

  gmood = [];

  onGlobalAdd(dataMessage) {
    this.gmood.push(dataMessage);
  }

  constructor() { }
}
