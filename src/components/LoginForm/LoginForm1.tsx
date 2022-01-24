import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../../api/UserService';

import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import FormInput from '../FormInput/FormInput';

import styles from './LoginForm.module.scss';

interface LoginForm1Props {
  changeStep: (step: number, email?: string) => void;
}

const LoginForm1: React.FC<LoginForm1Props> = ({ changeStep }) => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      data: { exists },
    } = await UserService.checkEmail(email);

    if (exists) {
      changeStep(2, email);
    } else {
      localStorage.setItem('registerEmail', email);
      navigate('/register');
    }
  };

  return (
    <div>
      <div className={styles.form_head}>
        <h3>Вход или регистрация</h3>
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

        <ButtonPrimary type="submit">Продолжить</ButtonPrimary>
        <p className={styles.or}>Или</p>
        <ul className={styles.icons}>
          <li>
            <img src="/assets/google.png" alt="google icon" />
          </li>
          <li>
            <img src="/assets/apple.png" alt="google icon" />
          </li>
          <li>
            <img src="/assets/vk.png" alt="google icon" />
          </li>
          <li>
            <img src="/assets/facebook.png" alt="google icon" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default LoginForm1;
