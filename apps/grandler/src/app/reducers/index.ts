import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import * as fromApp from '../app.reducer';
import {storeFreeze} from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { AppState } from '../app.reducer';

export interface State {
  routerReducer: fromRouter.RouterReducerState;
  appReducer: fromApp.AppState;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
  appReducer: fromApp.reducer
};

export const getAppSearchTerm = createSelector(
  ((state: State) => state.appReducer),
  (state: AppState) => state.search
);

export const getAppLogedInUser = createSelector(
  ((state: State) => state.appReducer),
  (state: AppState) => state.user
);

export const getAppError = createSelector(
  ((state: State) => state.appReducer),
  (state: AppState) => state.error
);


export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze, storeLogger()] : [];
