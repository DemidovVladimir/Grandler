import * as actions from './app.actions';

export interface AppState {
  search: string;
  user?: string;
  error?: string;
}

export const initialState: AppState = {
  search: '',
  user: null,
  error: null
};

export const reducer = (state: AppState = initialState, action: actions.Actions): AppState => {
  switch (action.type) {
    case actions.SEARCH_PERSIST:
      return {...state, search: action.payload};
    case actions.LOGIN_SUCCESS:
      return {...state, user: action.payload};
    case actions.SHOW_ROUTE_UNAUTH:
      return {...state, error: 'auth'};
    case actions.CLEAN_ERRORS:
      return {...state, error: null};
    default:
      return state;
  }
};
