import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './dashboard/appointment/appointment.component';
import { ClientsComponent } from './dashboard/appointment/clients/clients.component';
import { ServicesComponent } from './dashboard/appointment/services/services.component';
import { DateTimeComponent } from './dashboard/appointment/date-time/date-time.component';
import { StaffComponent } from './dashboard/appointment/staff/staff.component';
import { ResourcesComponent } from './dashboard/appointment/resources/resources.component';

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
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
