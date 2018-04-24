import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { CarsPageComponent } from './cars/cars-page/cars-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {reducer} from './cars.reducer';
import {EffectsModule} from '@ngrx/effects';
import {CarsEffects} from './cars.effects';

@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('car', reducer),
    EffectsModule.forFeature([CarsEffects])
  ],
  declarations: [CarsComponent, CarsPageComponent]
})
export class CarsModule { }
