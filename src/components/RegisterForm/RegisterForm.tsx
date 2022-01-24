import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import FormInput from '../FormInput/FormInput';

import styles from './RegisterForm.module.scss';

const RegisterForm: React.FC = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  });

  useEffect(() => {
    const registerEmail = localStorage.getItem('registerEmail');

    if (registerEmail) {
      setUser({ ...user, email: registerEmail });
    }
    // eslint-disable-next-line
  }, []);

  const { register } = useActions();
  const { error } = useTypedSelector((state) => state.auth);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    register(user);
  };

  return (
    <div>
      <div className={styles.form_head}>
        <h3>Регистрация</h3>
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
          value={user.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...user, email: e.target.value })
          }
          error={!!error.email?.[0]}
        />

        {error.email && <span className={styles.error}>{error.email[0]}</span>}

        <FormInput
          className={styles.input}
          type="password"
          placeholder="Пароль"
          required
          value={user.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...user, password: e.target.value })
          }
          error={!!error.password?.[0]}
        />

        {error.password && (
          <span className={styles.error}>{error.password[0]}</span>
        )}

        <FormInput
          className={styles.input}
          type="text"
          placeholder="Имя Фамилия"
          required
          value={user.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...user, name: e.target.value })
          }
          error={!!error.name?.[0]}
        />

        {error.name && <span className={styles.error}>{error.name[0]}</span>}

        <FormInput
          className={styles.input}
          type="text"
          placeholder="Телефон"
          value={user.phone}
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...user, phone: e.target.value })
          }
          error={!!error.phone?.[0]}
        />

        {error.phone && <span className={styles.error}>{error.phone[0]}</span>}

        <ButtonPrimary type="submit">Создать аккаунт</ButtonPrimary>
        <p className={styles.privacy}>
          Нажимая на "Создать аккаунт", вы соглашаетесь с{' '}
          <span>Политикой обработки данных</span>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
