import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {SheetService} from '../sheet-service/sheet.service';
import {Speaker} from '../models/Speaker';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnChanges {

  @Input() speakerId;
  currentSpeaker: Speaker;

  constructor(private sheetService: SheetService) {
    this.sheetService.currentSpeaker$.subscribe(
      speaker => {
        this.currentSpeaker = speaker;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (propName === 'speakerId') {
        this.sheetService.setCurrentSpeaker(Number(this.speakerId));
      }
    }
  }

}
