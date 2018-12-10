import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private inputData: string;

  constructor() { }

  setInputValue(value) {
    this.inputData = value;
  }

  getInputValue() {
    return this.inputData;
  }

}
