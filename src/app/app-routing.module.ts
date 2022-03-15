import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { MenuComponent } from './common/menu/menu.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: MenuComponent }

  /*{
    path: 'auth',
    loadChildren: () => import ('./auth/auth.module').then( m => m.AuthModule)
  },

  {
    path: '**',
    redirectTo: 'auth'
  }*/
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
    exports: [
      RouterModule
    ]
})
export class AppRoutingModule { }
