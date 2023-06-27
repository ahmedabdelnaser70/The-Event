import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'Dashboard';
  checkToken: boolean;
  constructor() {
    this.checkToken = false;
  }
  ngOnInit(): void {
    this.Check();
  }
  ngOnChanges(): void {
    this.Check();
  }

  private Check() {
    if(localStorage.getItem("TOKEN")) {
      this.checkToken = true;
    }
    else {
      this.checkToken = false;
    }
  }

}
