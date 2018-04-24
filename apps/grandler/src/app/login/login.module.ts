import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { AuthService } from '../services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent, LoginPageComponent],
  providers: [AuthService]
})
export class LoginModule { }
