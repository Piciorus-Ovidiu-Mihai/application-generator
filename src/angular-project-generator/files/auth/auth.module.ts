import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
  ],
})
export class AuthModule {}
