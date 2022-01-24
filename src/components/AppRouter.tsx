import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { privateRoutes, publicRoutes, RouteNames } from '../routes';

const AppRouter: React.FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  const { setAuth, logout } = useActions();

  useEffect(() => {
    const isAuth = localStorage.getItem('auth');
    const token = localStorage.getItem('token');
    if (isAuth && token) {
      setAuth(true);
    } else {
      logout();
    }
    // eslint-disable-next-line
  }, []);

  if (isAuth === null) {
    return <></>;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.HOME} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.HOME} replace />} />
    </Routes>
  );
};

export default AppRouter;
