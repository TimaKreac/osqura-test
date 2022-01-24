import React from 'react';
import classNames from 'classnames';
import styles from './FormInput.module.scss';

interface FormInputProps {
  type: string;
  value?: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  className,
  error,
  type,
  ...props
}) => {
  return (
    <div className={className}>
      <p className={styles.name}>{props.placeholder}</p>
      <input
        className={classNames([styles.input], { [styles.error]: error })}
        name={type}
        type={type}
        autoComplete="off"
        {...props}
      />
    </div>
  );
};

export default FormInput;
