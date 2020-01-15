import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillerWordCounterComponent } from './filler-word-counter.component';

describe('FillerWordCounterComponent', () => {
  let component: FillerWordCounterComponent;
  let fixture: ComponentFixture<FillerWordCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillerWordCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillerWordCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
