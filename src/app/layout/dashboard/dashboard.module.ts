import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from '../../app-routing.module';
import {DashboardComponent} from './dashboard.component';
import {CalendarComponent} from './calendar/calendar.component';
import {InternalNoteComponent} from './internal-note/internal-note.component';
import {ClientsSectionComponent} from './clients-section/clients-section.component';
import {AppointmentComponent} from './appointment/appointment.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CalendarComponent,
    InternalNoteComponent,
    ClientsSectionComponent,
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule
  ]
})
export class DashboardModule { }
