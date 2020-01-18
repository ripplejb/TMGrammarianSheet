import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  public circumference = 2 * Math.PI * 47;
  public strokeDashoffset = 0;

  constructor() { }

  ngOnInit() {
  }

}
