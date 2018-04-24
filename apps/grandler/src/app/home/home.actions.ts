import { Action } from '@ngrx/store';
import { BlogItem } from './home.module';

export const GET_DATA = '[Home] Get model data';
export const GET_DATA_COMPLETE = '[Home] Get model data success';

export class HomeGetDataAction implements Action {
  readonly type = GET_DATA;
}

export class HomeGetDataSuccessAction implements Action {
  readonly type = GET_DATA_COMPLETE;

  constructor(public payload: BlogItem[]) {
  }
}

export type Actions
  = HomeGetDataAction |
  HomeGetDataSuccessAction;
