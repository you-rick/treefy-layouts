import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarLeftbarComponent } from './calendar-leftbar.component';

describe('CalendarLeftbarComponent', () => {
  let component: CalendarLeftbarComponent;
  let fixture: ComponentFixture<CalendarLeftbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarLeftbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarLeftbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
