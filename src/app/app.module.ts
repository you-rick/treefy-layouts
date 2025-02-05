import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/dashboard/nav/nav.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { AppointmentComponent } from './layout/dashboard/appointment/appointment.component';
import { NextServiceComponent } from './layout/dashboard/appointment/next-service/next-service.component';
import { ClientsComponent } from './layout/dashboard/appointment/clients/clients.component';
import { ServicesComponent } from './layout/dashboard/appointment/services/services.component';
import { DateTimeComponent } from './layout/dashboard/appointment/date-time/date-time.component';
import { StaffComponent } from './layout/dashboard/appointment/staff/staff.component';
import { ResourcesComponent } from './layout/dashboard/appointment/resources/resources.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './layout/home/home.component';
import { ClientsSectionComponent } from './layout/dashboard/clients-section/clients-section.component';
import { ClientSearchComponent } from './layout/dashboard/clients-section/client-search/client-search.component';
import { ClientInfoComponent } from './layout/dashboard/clients-section/client-info/client-info.component';
import { ClientAppointmentsComponent } from './layout/dashboard/clients-section/client-appointments/client-appointments.component';
import { ClientPaymentsComponent } from './layout/dashboard/clients-section/client-payments/client-payments.component';
import { InternalNoteComponent } from './layout/dashboard/internal-note/internal-note.component';
import { CalendarComponent } from './layout/dashboard/calendar/calendar.component';
import { CalendarTopbarComponent } from './layout/dashboard/calendar/calendar-topbar/calendar-topbar.component';
import { CalendarLeftbarComponent } from './layout/dashboard/calendar/calendar-leftbar/calendar-leftbar.component';
import { CalendarInitialComponent } from './layout/dashboard/calendar/calendar-initial/calendar-initial.component';
import { CalendarWeeksComponent} from './layout/dashboard/calendar/calendar-weeks/calendar-weeks.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { SignInComponent } from './layout/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './layout/authentication/sign-up/sign-up.component';
import { SharedComponent } from './layout/shared/shared.component';
import { HeaderComponent } from './layout/shared/header/header.component';
import { FooterComponent } from './layout/shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    AppointmentComponent,
    ClientsComponent,
    ServicesComponent,
    DateTimeComponent,
    StaffComponent,
    ResourcesComponent,
    LayoutComponent,
    HomeComponent,
    NextServiceComponent,
    ClientsSectionComponent,
    ClientSearchComponent,
    ClientInfoComponent,
    ClientAppointmentsComponent,
    ClientPaymentsComponent,
    InternalNoteComponent,
    CalendarComponent,
    CalendarTopbarComponent,
    CalendarLeftbarComponent,
    CalendarInitialComponent,
    CalendarWeeksComponent,
    AuthenticationComponent,
    SignInComponent,
    SignUpComponent,
    SharedComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgScrollbarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQoc5qsdBCo5UQkPR2FGvKs--dQYosBZM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
