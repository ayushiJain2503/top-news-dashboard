import { ActionReducerMap, ActionReducer, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../reducer/login.reducer';
import * as fromNews from '../reducer/news.reducer';

export interface State {
    user: fromUser.State;
    news: fromNews.State;
}
  
export const reducers: ActionReducerMap<State> = {
    user: fromUser.reducer,
    news: fromNews.reducer
};
  
export function appState(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [appState];

export const getLoginState = createFeatureSelector<fromUser.State>('user');
export const getNewsState = createFeatureSelector<fromNews.State>('news');

export const getLoggedInUser = createSelector(
    getLoginState,
    fromUser.getLoggedInUser
);

export const userLogin = createSelector(
    getLoginState,
    fromUser.userLogin
);

export const userRegister = createSelector(
    getLoginState,
    fromUser.userRegister
);

export const getNewsLoadStatus = createSelector(
    getNewsState,
    fromNews.getNewsLoadStatus
);

export const getNewsSearchStatus = createSelector(
    getNewsState,
    fromNews.getNewsSearchStatus
);
