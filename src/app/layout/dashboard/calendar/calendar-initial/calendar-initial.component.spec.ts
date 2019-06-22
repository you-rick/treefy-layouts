import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarInitialComponent } from './calendar-initial.component';

describe('CalendarInitialComponent', () => {
  let component: CalendarInitialComponent;
  let fixture: ComponentFixture<CalendarInitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarInitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
