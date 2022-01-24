import React from 'react';
import Greeting from '../components/Greeting/Greeting';
import LinkList from '../components/LinkList/LinkList';
import { useTypedSelector } from '../hooks/useTypedSelector';

const HomePage: React.FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  if (isAuth) {
    return <Greeting />;
  }

  return (
    <div>
      <LinkList />
    </div>
  );
};

export default HomePage;
