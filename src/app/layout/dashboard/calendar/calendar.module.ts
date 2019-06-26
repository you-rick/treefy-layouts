import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from '../../../app-routing.module';
import {CalendarComponent} from './calendar.component';
import {CalendarLeftbarComponent} from './calendar-leftbar/calendar-leftbar.component';
import {CalendarTopbarComponent} from './calendar-topbar/calendar-topbar.component';
import {CalendarInitialComponent} from './calendar-initial/calendar-initial.component';
import { CalendarWeeksComponent } from './calendar-weeks/calendar-weeks.component';
import {NavComponent} from '../../nav/nav.component';


@NgModule({
  declarations: [
    CalendarComponent,
    CalendarTopbarComponent,
    CalendarLeftbarComponent,
    CalendarInitialComponent,
    CalendarWeeksComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule
  ]
})
export class CalendarModule { }
