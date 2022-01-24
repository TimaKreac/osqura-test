import React, { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

import styles from './Greeting.module.scss';

interface GreetingProps {}

const Greeting: React.FC<GreetingProps> = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
  });
  const { logout } = useActions();

  useEffect(() => {
    const user = localStorage.getItem('userInfo');
    if (user) {
      setUserInfo(JSON.parse(user));
    }
  }, []);

  return (
    <div className={styles.greeting}>
      <h1>Hi, {userInfo.name}!</h1>
      <ButtonPrimary type="button" onClick={logout}>
        Выйти
      </ButtonPrimary>
    </div>
  );
};

export default Greeting;
