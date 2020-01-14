import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {SheetService} from './sheet-service/sheet.service';
import {Speaker} from './models/Speaker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnDestroy {
  title = 'Grammarian Sheet';
  mobileQuery: MediaQueryList;

  speakers: Array<Speaker>;

  private readonly mobileQueryListener: () => void;
  currentSpeakerId = 1;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private sheetService: SheetService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
    this.speakers = sheetService.getSpeakers();
  }

  ngOnDestroy(): void {
      this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }

  onSelectName(speaker: Speaker) {
    this.currentSpeakerId = speaker.id;
  }

}
