import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarTopbarComponent } from './calendar-topbar.component';

describe('CalendarTopbarComponent', () => {
  let component: CalendarTopbarComponent;
  let fixture: ComponentFixture<CalendarTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
