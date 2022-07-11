// modules
import { useCallback, useContext, useState } from 'react';
// utils
import clsx from 'src/utils/clsx';
import StepContext from 'src/views/context';
import steps from 'src/views/steps';
// components
import Button from 'src/components/button';
// types
import { IStepProps } from '../types';
// styles
import styles from './welcome.module.scss';

function Welcome(props: IStepProps) {
  const { className } = props;
  const [clicked, setClicked] = useState(false);
  const { onStepChange, onNextStep } = useContext(StepContext);

  const handleClick = useCallback(() => {
    setClicked(true);
    onNextStep();
  }, [onNextStep]);

  const handleClickCV = useCallback(() => {
    const CV_STEP = steps.length - 1;
    onStepChange(CV_STEP);
  }, [onStepChange]);

  return (
    <div className={clsx(styles.welcome, className)}>
      <h2>
        Meet the Software Engineer
        {' '}
        <br />
        {' '}
        Anton Leusenko
      </h2>
      <Button className={clsx(styles.startButton, { [styles.pulse]: !clicked })} onClick={handleClick}>
        start
      </Button>
      <Button variant="light" className={styles.cvButton} onClick={handleClickCV}>
        CV
      </Button>
    </div>
  );
}

export default Welcome;
