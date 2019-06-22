import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {AppointmentComponent} from './layout/dashboard/appointment/appointment.component';
import {ClientsSectionComponent} from './layout/dashboard/clients-section/clients-section.component';
import {InternalNoteComponent} from './layout/dashboard/internal-note/internal-note.component';
import {CalendarComponent} from './layout/dashboard/calendar/calendar.component';
import {CalendarInitialComponent} from './layout/dashboard/calendar/calendar-initial/calendar-initial.component';

const calendarRoutes: Routes = [
  { path: 'calendar-init', component: CalendarInitialComponent }
]

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-appointment', component: AppointmentComponent },
  { path: 'clients', component: ClientsSectionComponent },
  { path: 'internal-note', component: InternalNoteComponent },
  {path: 'calendar', component: CalendarComponent, children: calendarRoutes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
