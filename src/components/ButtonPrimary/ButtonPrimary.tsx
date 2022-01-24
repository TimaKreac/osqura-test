import React from 'react';

import styles from './ButtonPrimary.module.scss';

interface ButtonPrimaryProps {
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  children,
  ...props
}) => {
  return (
    <button className={styles.btn} {...props}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
