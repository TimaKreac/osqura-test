import { IAuthError } from './../../models/IAuthError';
import { IUser } from '../../models/IUser';

export interface AuthState {
  isAuth: boolean | null;
  user: IUser;
  error: IAuthError;
}

export enum AuthActionsEnum {
  SET_AUTH = 'SET_AUTH',
  SET_USER = 'SET_USER',
  SET_ERROR = 'SET_ERROR',
}

export interface SetAuthAction {
  type: AuthActionsEnum.SET_AUTH;
  payload: boolean;
}

export interface SetUserAction {
  type: AuthActionsEnum.SET_USER;
  payload: IUser;
}

export interface SetErrorAction {
  type: AuthActionsEnum.SET_ERROR;
  payload: IAuthError;
}

export type AuthAction = SetAuthAction | SetUserAction | SetErrorAction;
