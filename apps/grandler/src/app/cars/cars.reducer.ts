import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as actions from './cars.actions';
import {Car} from './cars.models';

export const initialState: Car = {
  title: 'Lada',
  problems: [{
    engine: {
      description: 'broken from factory',
      img: null,
      cost: null
    }
  }],
  benefits: [{
    patriotism: {
      description: 'no one knows where comes from',
      img: null,
      price: null
    }
  }],
  loading: false,
  compareTo: null
};

export const reducer = (state: Car = initialState, action: actions.Actions): Car => {
  switch (action.type) {
    case actions.GET_DATA:
      return {...state, loading: true};
    case actions.GET_CHECKED_PARTS:
      const issues = [{...state.problems[0], [action.payload]: {...state.problems[0][action.payload], checked: true}}];
      return {...state, problems: issues};
    case actions.GET_UNCHECKED_PARTS:
      const nonissues = [{...state.problems[0], [action.payload]: {...state.problems[0][action.payload], checked: false}}];
      return {...state, problems: nonissues};
    case actions.GET_DATA_COMPLETE:
      const {title, problems, benefits} = action.payload;
      return {...state, loading: false, title, problems, benefits};
    default:
      return state;
  }
};

export const getCarState = createFeatureSelector<Car>('car');

export const getCarTitle = createSelector(getCarState,
  (state: Car) => state.title);
export const getCarProblems = createSelector(getCarState,
  (state: Car) => state.problems);
export const getCarBenefits = createSelector(getCarState,
  (state: Car) => state.benefits);
export const getLoading = createSelector(getCarState,
  (state: Car) => state.loading);
