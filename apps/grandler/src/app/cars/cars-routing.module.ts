import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarsComponent} from './cars.component';
import {CarsPageComponent} from './cars/cars-page/cars-page.component';

const routes: Routes = [{
  path: '',
  component: CarsComponent,
  children: [
    {
      path: '',
      redirectTo: 'cars-page'
    },
    {
      path: 'cars-page',
      component: CarsPageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
