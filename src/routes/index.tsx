import React from 'react';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

export interface IRoute {
  path: string;
  element: React.ReactElement;
  exact?: boolean;
}

export enum RouteNames {
  HOME = '/',
  LOGIN_1 = '/login-1',
  LOGIN_2 = '/login-2',
  REGISTER = '/register',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.HOME, element: <HomePage /> },
  { path: RouteNames.LOGIN_1, element: <LoginPage step={1} /> },
  { path: RouteNames.LOGIN_2, element: <LoginPage step={2} /> },
  { path: RouteNames.REGISTER, element: <RegisterPage /> },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.HOME, element: <HomePage /> },
];
