import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SheetService} from './sheet-service/sheet.service';
import {Speaker} from './models/Speaker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnDestroy, OnInit {
  title = 'Grammarian Sheet';

  speakers: Array<Speaker>;
  speakersSubscription: Subscription;


  constructor(private sheetService: SheetService) {
    this.speakersSubscription = this.sheetService.speakers$.subscribe(speakers => this.speakers = speakers);
  }

  ngOnDestroy(): void {
      this.speakersSubscription.unsubscribe();
  }

  onSelectName(speaker: Speaker) {
    this.sheetService.loadCurrentSpeaker(speaker.id);
  }

  ngOnInit(): void {
    this.sheetService.loadSpeakerList();
  }

}
