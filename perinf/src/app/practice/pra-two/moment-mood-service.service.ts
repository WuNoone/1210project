import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MomentMoodServiceService {

  mood = ['喜', '怒', '哀', '乐'];

  constructor() { }

}
