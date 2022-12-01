import { createAction, props } from '@ngrx/store';

export const NEWS_LOAD = '[News Dashboard] News Loading';
export const NEWS_LOAD_SUCCESS = '[News Dashboard] News Loading Success';
export const NEWS_LOAD_FAILURE = '[News Dashboard] News Loading Failure';
export const NEWS_SEARCH = '[News Dashboard] News Search';
export const NEWS_SEARCH_SUCCESS = '[News Dashboard] News Search Success';
export const NEWS_SEARCH_FAILURE = '[News Dashboard] News Search Failure';

export const newsLoad = createAction(
    NEWS_LOAD,
    props<{category: string}>()
);
  
export const newsLoadSuccess = createAction(
    NEWS_LOAD_SUCCESS
);
  
export const newsLoadFailure = createAction(
    NEWS_LOAD_FAILURE,
    props<{message: string}>()
);

export const newsSearch = createAction(
    NEWS_SEARCH,
    props<{keyword: string}>()
);
  
export const newsSearchSuccess = createAction(
    NEWS_SEARCH_SUCCESS
);
  
export const newsSearchFailure = createAction(
    NEWS_SEARCH_FAILURE,
    props<{message: string}>()
);
