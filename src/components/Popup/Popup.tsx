import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Popup.module.scss';

interface PopupProps {}

const Popup: React.FC<PopupProps> = ({ children }) => {
  let navigate = useNavigate();

  return (
    <div className={styles.popup}>
      <div
        className={styles.back}
        onClick={() => navigate('/', { replace: true })}
      />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Popup;
