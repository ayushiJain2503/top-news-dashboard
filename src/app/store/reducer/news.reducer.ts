import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import * as userActions from '../action';

export interface State {
  category: string;
  keyword: string;
  newsLoadSuccess: boolean;
  newsLoadFailure: boolean;
  searchSuccess: boolean;
  searchFailure: boolean;
}

export const initialState: State = {
  category: 'home',
  keyword: '',
  newsLoadSuccess: true,
  newsLoadFailure: false,
  searchSuccess: true,
  searchFailure: false
};

const newsReducer = createReducer(
  initialState,
  on(userActions.newsLoad, (state, { category }) => ({
    ...state,
    category: category,
    isLoading: true
  })),
  on(userActions.newsLoadSuccess, (state) => ({
    ...state,
    isLoading: false,
    newsLoadSuccess: true,
    newsLoadFailure: false
  })),
  on(userActions.newsLoadFailure, (state) => ({
    ...state,
    isLoading: false,
    newsLoadFailure: true,
    newsLoadSuccess: false
  })),
  on(userActions.newsSearch, (state, { keyword }) => ({
    ...state,
    keyword: keyword,
    isLoading: true
  })),
  on(userActions.newsSearchSuccess, (state) => ({
    ...state,
    isLoading: false,
    searchSuccess: true,
    searchFailure: false
  })),
  on(userActions.newsSearchFailure, (state) => ({
    ...state,
    isLoading: false,
    searchSuccess: false,
    searchFailure: true
  }))
);

export function reducer(state: State | undefined, action: Action): any {
  return newsReducer(state, action);
}

export const getNewsLoadStatus = (state: State) => {
  return {
    newsLoadSuccess: state.newsLoadSuccess,
    newsLoadFailure: state.newsLoadFailure
  };
};

export const getNewsSearchStatus = (state: State) => {
  return {
    newsSearchSuccess: state.searchSuccess,
    newsSearchFailure: state.searchFailure
  };
};
