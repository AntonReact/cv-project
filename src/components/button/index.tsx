// modules
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
// utils
import clsx from 'src/utils/clsx';
// styles
import styles from './button.module.scss';

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: 'primary' | 'light';
}

function Button(props: IButtonProps) {
  const {
    fullWidth, className, children, variant, ...rest
  } = props;
  const classNames = clsx(styles.button, styles[variant || 'primary'], className, { fullWidth });

  return (
    <button
      type="button"
      className={classNames}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  fullWidth: false,
  variant: 'primary',
};

export default Button;
