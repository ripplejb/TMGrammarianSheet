import {Component, Input, OnInit} from '@angular/core';
import {FillerWord} from '../models/FillerWord';

@Component({
  selector: 'app-filler-word-counter',
  templateUrl: './filler-word-counter.component.html',
  styleUrls: ['./filler-word-counter.component.css']
})
export class FillerWordCounterComponent implements OnInit {

  @Input() fillerWord: FillerWord;

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.fillerWord.count++;
  }

  remove() {
    if (this.fillerWord.count > 0) {
      this.fillerWord.count--;
    }
  }
}
