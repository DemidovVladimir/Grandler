import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostRoutingModule } from './create-post-routing.module';
import { CreatePostComponent } from './create-post.component';
import { StoreModule } from '@ngrx/store';
import * as fromCreatePost from './reducers/create-post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CreatePostEffects } from './effects/create-post.effects';
import { CreatePostPageComponent } from './create-post/create-post-page/create-post-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FileCrudModule } from '../shared/file-crud/file-crud.module';

@NgModule({
  imports: [
    CommonModule,
    CreatePostRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FileCrudModule,
    StoreModule.forFeature('createPost', fromCreatePost.reducer),
    EffectsModule.forFeature([CreatePostEffects])
  ],
  declarations: [
    CreatePostComponent,
    CreatePostPageComponent
  ]
})
export class CreatePostModule {
}
