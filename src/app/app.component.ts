import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Observable, Subscription} from 'rxjs';
import {SheetService} from './sheet-service/sheet.service';
import {Speaker} from './models/Speaker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnDestroy, OnInit {
  title = 'Grammarian Sheet';
  mobileQuery: MediaQueryList;

  speakers: Array<Speaker>;
  speakersSubscription: Subscription;

  private readonly mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private sheetService: SheetService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
    this.speakersSubscription = this.sheetService.speakers$.subscribe(speakers => this.speakers = speakers);
  }

  ngOnDestroy(): void {
      this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
      this.speakersSubscription.unsubscribe();
  }

  onSelectName(speaker: Speaker) {
    this.sheetService.loadCurrentSpeaker(speaker.id);
  }

  ngOnInit(): void {
    this.sheetService.loadSpeakerList();
  }

}
