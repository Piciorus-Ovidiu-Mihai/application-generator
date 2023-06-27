import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./auth-page/auth-page.module').then((m) => m.AuthPageModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  { path: '**', redirectTo: '/auth/login' },
];

@NgModule({
  declarations: [
    AuthPageComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class AuthModule {}
