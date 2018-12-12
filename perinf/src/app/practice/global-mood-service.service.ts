import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalMoodServiceService {

  gmood = ['喜', '怒', '哀', '乐'];
  nullmood = [];
  num = 0;
  constructor() { }
}
