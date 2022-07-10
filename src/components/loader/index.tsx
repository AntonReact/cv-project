// moduless
import { useEffect, useState } from 'react';
// utils
import clsx from 'src/utils/clsx';
// styles
import styles from './loader.module.scss';

interface ILoaderProps {
  loading?: boolean;
  timeout?: number;
  className?: string;
}

function Loader(props: ILoaderProps) {
  const { loading, className, timeout } = props;
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (timeout) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, timeout);
    } else {
      setLoading(!!loading);
    }
  }, [loading, timeout]);

  return (
    <div className={clsx(styles.loader, { [styles.show]: isLoading }, className)}>
      <span />
    </div>
  );
}

Loader.defaultProps = {
  className: '',
  loading: false,
  timeout: 0,
};

export default Loader;
