import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IUser } from '../../models/IUser';

import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import FormInput from '../FormInput/FormInput';

import styles from './LoginForm.module.scss';

interface LoginForm2Props {
  loginEmail: string;
  changeStep: (step: number, email?: string) => void;
}

const LoginForm2: React.FC<LoginForm2Props> = ({ loginEmail, changeStep }) => {
  const [email, setEmail] = useState(loginEmail);
  const [password, setPassword] = useState('');
  const { error } = useTypedSelector((state) => state.auth);

  const { login } = useActions();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login({ email, password } as IUser);
  };

  return (
    <div>
      <div className={styles.form_head}>
        <div className={styles.enter}>
          <img
            src="/assets/left-arrow.png"
            alt="left arrow button"
            onClick={() => changeStep(1)}
          />
          <h3>Вход</h3>
        </div>
        <Link to="/">
          <img src="/assets/close.png" alt="close button" />
        </Link>
      </div>
      <form className={styles.form} onSubmit={submitHandler}>
        <FormInput
          className={styles.input}
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />

        <FormInput
          className={styles.input}
          type="password"
          placeholder="Пароль"
          required
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />

        {error.login && <span className={styles.error}>{error.login}</span>}

        <ButtonPrimary type="submit">Войти</ButtonPrimary>
      </form>
    </div>
  );
};

export default LoginForm2;
