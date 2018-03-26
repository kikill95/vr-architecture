import { Component, OnInit } from '@angular/core';
// import aframe from 'aframe';
// import registerMap from 'aframe-map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'app';

  public ngOnInit(): void {
    // registerMap(aframe);
  }
}
