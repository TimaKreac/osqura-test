import { IAuthError } from './../../models/IAuthError';
import { AppDispatch } from '..';
import UserService from '../../api/UserService';
import { IUser } from './../../models/IUser';
import {
  AuthActionsEnum,
  SetAuthAction,
  SetErrorAction,
  SetUserAction,
} from './auth.types';

export const AuthActionCreators = {
  setAuth: (isAuth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: isAuth,
  }),
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setError: (error: IAuthError): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload: error,
  }),
  register: (user: IUser) => async (dispatch: AppDispatch) => {
    try {
      const res = await UserService.registerUser(user);

      if (res.status !== 200) {
        dispatch(AuthActionCreators.setError(res.data.error));
        throw new Error('Регистрация завершилась некорректно');
      }
      localStorage.removeItem('registerEmail');
      const loginRes = await UserService.loginUser(user);

      localStorage.setItem('auth', 'true');
      localStorage.setItem('userInfo', JSON.stringify(loginRes.data.user));
      localStorage.setItem('token', loginRes.data.token);

      dispatch(AuthActionCreators.setAuth(true));
      dispatch(AuthActionCreators.setUser(user));
    } catch (error) {
      console.log(error);
    }
  },
  login: (user: IUser) => async (dispatch: AppDispatch) => {
    try {
      const res = await UserService.loginUser(user);

      if (res.status !== 200) {
        dispatch(
          AuthActionCreators.setError({
            login: 'Некорректные данные',
          } as IAuthError)
        );
        throw new Error('Некорректный ввод данных');
      }

      localStorage.setItem('auth', 'true');
      localStorage.setItem('userInfo', JSON.stringify(res.data.user));
      localStorage.setItem('token', res.data.token);

      dispatch(AuthActionCreators.setAuth(true));
      dispatch(AuthActionCreators.setUser(user));
    } catch (error) {
      console.log(error);
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    dispatch(AuthActionCreators.setAuth(false));
    dispatch(AuthActionCreators.setUser({} as IUser));
    localStorage.removeItem('auth');
    localStorage.removeItem('userInfo');
  },
};
