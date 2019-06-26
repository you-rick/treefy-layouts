import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from '../../app-routing.module';
import {AuthenticationComponent} from './authentication.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {HeaderComponent} from '../shared/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AuthenticationComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule
  ]
})
export class AuthenticationModule { }
