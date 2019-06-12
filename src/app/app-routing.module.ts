import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {AppointmentComponent} from './layout/dashboard/appointment/appointment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-appointment', component: AppointmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
