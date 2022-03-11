import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'forgot', component: ForgotComponent},
      {path: 'login', component: LoginComponent},
      {path: 'registro', component: RegistroComponent},
      {path: '**', redirectTo: 'login'}
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes) 
  ]
})
export class AuthRoutingModule { }
