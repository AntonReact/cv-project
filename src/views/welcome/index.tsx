// modules
import { useCallback, useContext, useState } from 'react';
// utils
import clsx from 'src/utils/clsx';
import StepContext from 'src/views/context';
// components
import DownloadCvButton from 'src/components/download-cv-button';
import Button from 'src/components/button';
// types
import { IStepProps } from '../types';
// styles
import styles from './welcome.module.scss';

function Welcome(props: IStepProps) {
  const { className } = props;
  const [clicked, setClicked] = useState(false);
  const { onNextStep } = useContext(StepContext);

  const handleClick = useCallback(() => {
    setClicked(true);
    onNextStep();
  }, [onNextStep]);

  return (
    <div className={clsx(styles.welcome, className)}>
      <h2>
        Welcome to my portfolio!
      </h2>
      <Button className={clsx({ [styles.pulse]: !clicked })} onClick={handleClick}>
        start
      </Button>
      <DownloadCvButton />
    </div>
  );
}

export default Welcome;
