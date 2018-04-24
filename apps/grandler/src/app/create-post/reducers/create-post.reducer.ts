import { Action } from '@ngrx/store';
import { CreatePostActions, CreatePostActionTypes } from '../actions/create-post.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: CreatePostActions): State {
  switch (action.type) {

    case CreatePostActionTypes.CreatePostAction:
      return state;


    default:
      return state;
  }
}
