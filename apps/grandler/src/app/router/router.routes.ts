import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthGuardService } from '../services/auth-guard.service';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cars/:param', loadChildren: './cars/cars.module#CarsModule'},
  {path: 'create', canActivate: [AuthGuardService], loadChildren: './create-post/create-post.module#CreatePostModule'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'}
];
