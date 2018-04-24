import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostComponent } from './create-post.component';
import { CreatePostPageComponent } from './create-post/create-post-page/create-post-page.component';

const routes: Routes = [{
  path: '',
  component: CreatePostComponent,
  children: [
    {
      path: '',
      component: CreatePostPageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePostRoutingModule { }
