import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CreatePostActions, CreatePostActionTypes } from '../actions/create-post.actions';

@Injectable()
export class CreatePostEffects {

  @Effect()
  effect$ = this.actions$.ofType(CreatePostActionTypes.CreatePostAction);

  constructor(private actions$: Actions) {}
}
