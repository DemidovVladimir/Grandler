import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './home.effects';
import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('home', reducer),
    EffectsModule.forFeature([HomeEffects]),
    FlexLayoutModule
  ],
  declarations: [HomeComponent]
})
export class HomeModel {
}
