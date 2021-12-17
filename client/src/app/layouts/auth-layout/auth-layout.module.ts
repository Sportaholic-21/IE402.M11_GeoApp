import { RouterModule, Routes } from '@angular/router';

import { AuthenticationComponent } from './authentication/authentication.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
      path: '',
      component: AuthenticationComponent,
      children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: LoginComponent, data: { title: 'Login :: Lucid Angular' } },
    { path: 'signup', component: SignUpComponent},
      ]
  }
];


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ]
})
export class AuthLayoutModule { }
