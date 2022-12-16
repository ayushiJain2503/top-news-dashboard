import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/interfaces';
import * as userActions from '../action';

export interface State {
  user: User;
  isLoading: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

export const initialState: State = {
  user: { username: '', password: '' },
  isLoading: false,
  isLoadingSuccess: true,
  isLoadingFailure: false
};

const loginReducer = createReducer(
  initialState,
  on(userActions.login, (state, { user }) => ({
    ...state,
    user: user,
    isLoading: true
  })),
  on(userActions.loginSuccess, (state) => ({
    ...state,
    isLoading: false,
    isLoadingSuccess: true,
    isLoadingFailure: false
  })),
  on(userActions.loginFailure, () => ({
    user: { username: '', password: '' },
    isLoading: false,
    isLoadingFailure: true,
    isLoadingSuccess: false
  })),
  on(userActions.register, (state, { user }) => ({
    user: user,
    isLoading: true
  })),
  on(userActions.registerSuccess, (state) => ({
    ...state,
    isLoading: false,
    isLoadingSuccess: true,
    isLoadingFailure: false
  })),
  on(userActions.registerFailure, () => ({
    user: { username: '', password: '' },
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingFailure: true
  }))
);

export function reducer(state: State | undefined, action: Action): any {
  return loginReducer(state, action);
}

export const getLoggedInUser = (state: State) => {
  return {
    user: state.user,
    isLoadingSuccess: state.isLoadingSuccess
  };
};

export const userLogin = (state: State) => {
  return {
    user: state.user,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  };
};

export const userRegister = (state: State) => {
  return {
    user: state.user,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  };
};
