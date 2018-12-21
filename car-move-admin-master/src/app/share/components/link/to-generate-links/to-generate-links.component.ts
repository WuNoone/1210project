import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-generate-links',
  templateUrl: './to-generate-links.component.html',
  styleUrls: ['./to-generate-links.component.less']
})
export class ToGenerateLinksComponent implements OnInit {

  public hidden = false;
  public data: number;

  constructor() { }

  ngOnInit() {
  }
  onDownload(s) {
    console.log(this.data);
    if (isNaN(this.data) || this.data === null) {
      this.hidden = true;
      this.data = null;
      return false;
    } else {
      this.hidden = false;
      this.data = null;
      return true;
    }
  }

}
