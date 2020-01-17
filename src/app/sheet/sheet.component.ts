import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {SheetService} from '../sheet-service/sheet.service';
import {Speaker} from '../models/Speaker';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnDestroy {

  private subscription: Subscription;

  currentSpeaker: Speaker;

  constructor(private sheetService: SheetService) {
    this.subscription = this.sheetService.currentSpeaker$.subscribe(
      speaker => {
        this.currentSpeaker = speaker;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
