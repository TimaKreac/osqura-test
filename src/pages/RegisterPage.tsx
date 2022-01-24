import React from 'react';
import LinkList from '../components/LinkList/LinkList';
import Popup from '../components/Popup/Popup';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <>
      <LinkList />
      <Popup>
        <RegisterForm />
      </Popup>
    </>
  );
};

export default RegisterPage;
