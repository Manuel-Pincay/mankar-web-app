import { Routes } from '@angular/router';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
 
import { LoginComponent } from './Modules/login/login.component';
import { MainComponent } from './Modules/main/main.component';
import { RegistroComponent } from './Modules/registro/registro.component';

export const routes: Routes = [
  { 'path': '', pathMatch: 'full', redirectTo: 'main' },
  { 'path': 'main', component: MainComponent,},
  { 'path': 'registro', component: RegistroComponent },
  { 'path': 'login', component: LoginComponent }
];
