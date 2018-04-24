import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as actions from './home.actions';
import { BlogItem } from './home.module';

export interface HomeInterface {
  blogs: BlogItem[];
  loaded: boolean;
}

export const initialState: HomeInterface = {
  blogs: [],
  loaded: false
};

export const reducer = (state: HomeInterface = initialState, action: actions.Actions): HomeInterface => {
  switch (action.type) {
    case actions.GET_DATA_COMPLETE:
      return {blogs: action.payload, loaded: true};
    default:
      return state;
  }
};

export const getBlogState = createFeatureSelector<HomeInterface>('home');

export const getBlogItems = createSelector(getBlogState,
  (state: HomeInterface) => state.blogs);
export const getBlogItemsLoadedStatus = createSelector(getBlogState,
  (state: HomeInterface) => state.loaded);
