import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppRoutingModule} from '../../../app-routing.module';
import {CalendarComponent} from './calendar.component';
import {CalendarLeftbarComponent} from './calendar-leftbar/calendar-leftbar.component';
import {CalendarTopbarComponent} from './calendar-topbar/calendar-topbar.component';
import {CalendarInitialComponent} from './calendar-initial/calendar-initial.component';



@NgModule({
  declarations: [
    CalendarComponent,
    CalendarTopbarComponent,
    CalendarLeftbarComponent,
    CalendarInitialComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class CalendarModule { }
