import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatPopupComponent } from './repeat-popup.component';

describe('RepeatPopupComponent', () => {
  let component: RepeatPopupComponent;
  let fixture: ComponentFixture<RepeatPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
