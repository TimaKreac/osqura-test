import React, { useState } from 'react';
import LinkList from '../components/LinkList/LinkList';
import LoginForm1 from '../components/LoginForm/LoginForm1';
import LoginForm2 from '../components/LoginForm/LoginForm2';
import Popup from '../components/Popup/Popup';

interface LoginPageProps {
  step: number;
}

const LoginPage: React.FC<LoginPageProps> = ({ step }) => {
  const [loginStep, setLoginStep] = useState(step);
  const [email, setEmail] = useState('');

  const changeStep = (step: number, email?: string) => {
    setEmail(email || '');
    setLoginStep(step);
  };

  return (
    <>
      <LinkList />
      <Popup>
        {loginStep === 1 && <LoginForm1 changeStep={changeStep} />}
        {loginStep === 2 && (
          <LoginForm2 loginEmail={email} changeStep={changeStep} />
        )}
      </Popup>
    </>
  );
};

export default LoginPage;
