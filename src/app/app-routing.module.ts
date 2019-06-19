import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {AppointmentComponent} from './layout/dashboard/appointment/appointment.component';
import {ClientsSectionComponent} from './layout/dashboard/clients-section/clients-section.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-appointment', component: AppointmentComponent },
  { path: 'clients', component: ClientsSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
