import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalNoteComponent } from './internal-note.component';

describe('InternalNoteComponent', () => {
  let component: InternalNoteComponent;
  let fixture: ComponentFixture<InternalNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
