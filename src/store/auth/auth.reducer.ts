import { IAuthError } from './../../models/IAuthError';
import { IUser } from './../../models/IUser';
import { AuthAction, AuthActionsEnum, AuthState } from './auth.types';

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  error: {} as IAuthError,
};

export default function authReducer(
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActionsEnum.SET_USER:
      return { ...state, user: action.payload };
    case AuthActionsEnum.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
