import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MomentMoodServiceService {

  mmood = [];

  onMomentAdd(message) {
    this.mmood.push(message);
  }

  constructor() { }

}
