import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LinkList.module.scss';

const LinkList: React.FC = () => {
  return (
    <ul className={styles.list}>
      <li>
        <Link to="/login-1">Вход1</Link>
      </li>
      <li>
        <Link to="/login-2">Вход2</Link>
      </li>
      <li>
        <Link to="/register">Регистрация</Link>
      </li>
    </ul>
  );
};

export default LinkList;
