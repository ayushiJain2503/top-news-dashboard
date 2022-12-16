import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces';

export const USER_REGISTER = '[Register Page] Register';
export const USER_REGISTER_SUCCESS = '[Register Page] Register Success';
export const USER_REGISTER_FAILURE = '[Register Page] Register Failure';

export const register = createAction(USER_REGISTER, props<{ user: User }>());

export const registerSuccess = createAction(USER_REGISTER_SUCCESS);

export const registerFailure = createAction(
  USER_REGISTER_FAILURE,
  props<{ message: string }>()
);
