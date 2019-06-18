import { Component, OnInit, ViewChild } from '@angular/core';
import {RepeatPopupComponent} from './repeat-popup/repeat-popup.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  @ViewChild(RepeatPopupComponent, {static: true}) child: RepeatPopupComponent;
  constructor() { }

  openModal() {
    this.child.open(RepeatPopupComponent);
  }

  ngOnInit() {
  }

}
