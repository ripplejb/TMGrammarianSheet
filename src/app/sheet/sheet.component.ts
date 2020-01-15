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
    this.currentSpeaker = this.sheetService.getSpeakers().find(sp => sp.id === Number(this.speakerId));
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (propName === 'speakerId') {
        this.currentSpeaker = this.sheetService.getSpeakers().find(sp => sp.id === Number(this.speakerId));
      }
    }
  }

}
