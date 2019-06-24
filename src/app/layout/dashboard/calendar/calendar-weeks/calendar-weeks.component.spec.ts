import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarWeeksComponent } from './calendar-weeks.component';

describe('CalendarWeeksComponent', () => {
  let component: CalendarWeeksComponent;
  let fixture: ComponentFixture<CalendarWeeksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarWeeksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarWeeksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
