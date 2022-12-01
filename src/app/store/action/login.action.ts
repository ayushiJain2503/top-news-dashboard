import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces';

export const USER_LOGIN = '[Login Page] Login';
export const USER_LOGIN_SUCCESS = '[Login Page] Login Success';
export const USER_LOGIN_FAILURE = '[Login Page] Login Failure';

export const login = createAction(
    USER_LOGIN,
    props<{user: User}>()
);
  
export const loginSuccess = createAction(
    USER_LOGIN_SUCCESS
);
  
export const loginFailure = createAction(
    USER_LOGIN_FAILURE,
    props<{message: string}>()
);
