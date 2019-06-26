import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './layout/dashboard/dashboard.component';
import {HomeComponent} from './layout/home/home.component';
import {AppointmentComponent} from './layout/dashboard/appointment/appointment.component';
import {ClientsSectionComponent} from './layout/dashboard/clients-section/clients-section.component';
import {InternalNoteComponent} from './layout/dashboard/internal-note/internal-note.component';
import {CalendarComponent} from './layout/dashboard/calendar/calendar.component';
import {CalendarInitialComponent} from './layout/dashboard/calendar/calendar-initial/calendar-initial.component';
import {CalendarWeeksComponent} from './layout/dashboard/calendar/calendar-weeks/calendar-weeks.component';
import {AuthenticationComponent} from './layout/authentication/authentication.component';
import {SignInComponent} from './layout/authentication/sign-in/sign-in.component';
import {SignUpComponent} from './layout/authentication/sign-up/sign-up.component';

const authRoutes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent}
];

const calendarRoutes: Routes = [
  {path: 'calendar-init', component: CalendarInitialComponent},
  {path: 'calendar-weeks', component: CalendarWeeksComponent}
];

const dashboardRoutes: Routes = [
  {path: 'new-appointment', component: AppointmentComponent},
  {path: 'clients', component: ClientsSectionComponent},
  {path: 'internal-note', component: InternalNoteComponent},
  {path: 'calendar', component: CalendarComponent, children: calendarRoutes}
];

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent, children: dashboardRoutes},
  {path: 'auth', component: AuthenticationComponent, children: authRoutes}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
