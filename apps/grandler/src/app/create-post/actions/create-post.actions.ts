import { Action } from '@ngrx/store';

export enum CreatePostActionTypes {
  CreatePostAction = '[CreatePost] Action'
}

export class CreatePost implements Action {
  readonly type = CreatePostActionTypes.CreatePostAction;
}

export type CreatePostActions = CreatePost;
