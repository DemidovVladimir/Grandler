import {Action} from '@ngrx/store';
import {Car} from './cars.models';

export const GET_DATA = '[Cars] Get model data';
export const GET_DATA_COMPLETE = '[Cars] Get model data success';
export const GET_CHECKED_PARTS = '[Cars] Get checked parts';
export const GET_UNCHECKED_PARTS = '[Cars] Get unchecked parts';

export class CarsGetDataAction implements Action {
  readonly type = GET_DATA;

  constructor(public payload: string) {
  }
}

export class CarsGetCheckedPartsAction implements Action {
  readonly type = GET_CHECKED_PARTS;

  constructor(public payload: string) {
  }
}

export class CarsGetUnCheckedPartsAction implements Action {
  readonly type = GET_UNCHECKED_PARTS;

  constructor(public payload: string) {
  }
}

export class CarsGetDataSuccessAction implements Action {
  readonly type = GET_DATA_COMPLETE;

  constructor(public payload: Car) {
  }
}

export type Actions
  = CarsGetDataAction |
  CarsGetDataSuccessAction |
  CarsGetCheckedPartsAction |
  CarsGetUnCheckedPartsAction;
