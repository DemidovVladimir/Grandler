import { Action } from '@ngrx/store';

export const SEARCH = '[App] Search';
export const SEARCH_PERSIST = '[App] Search persist';
export const LOGIN = '[App] Login';
export const LOGIN_SUCCESS = '[App] Login success';
export const SHOW_ROUTE_UNAUTH = '[App] Show user is not yet authed';
export const CLEAN_ERRORS = '[App] Clean all errors';

export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) {
  }
}

export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: string) {
  }
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: any) {
  }
}

export class PersistSearchAction implements Action {
  readonly type = SEARCH_PERSIST;

  constructor(public payload: string) {
  }
}

export class ShowRouteUnauthErrorAction implements Action {
  readonly type = SHOW_ROUTE_UNAUTH;
}

export class CleanAllErrorsAction implements Action {
  readonly type = CLEAN_ERRORS;
}

export type Actions
  = SearchAction |
  PersistSearchAction |
  LoginAction |
  LoginSuccessAction |
  ShowRouteUnauthErrorAction |
  CleanAllErrorsAction;
