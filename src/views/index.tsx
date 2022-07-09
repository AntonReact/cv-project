// modules
import { useCallback, useEffect, useState } from 'react';
// utils
import clsx from 'src/utils/clsx';
// components
import StepContext from './context';
import Welcome from './welcome';
import Projects from './projects';
import Skills from './skills';
import CV from './cv';
// types
import { IStep, IStepContext } from './types';
// styles
import styles from './views.module.scss';

const steps: Array<IStep> = [
  {
    Component: Welcome,
    theme: 'white',
  },
  {
    Component: Skills,
    theme: 'black',
  },
  {
    Component: Projects,
    theme: 'black',
  },
  {
    Component: CV,
    theme: 'black',
  },
];

const STEP_CHANGE_DELAY: number = 1000;

function Views() {
  const [currentStep, setStep] = useState<number>(0);
  const [stepSwitchingTo, setStepSwitching] = useState<number | null>(null);
  const { theme } = steps[currentStep];

  useEffect(() => {
    if (stepSwitchingTo === null) return;
    setTimeout(() => {
      setStep(stepSwitchingTo);
      setStepSwitching(null);
    }, STEP_CHANGE_DELAY);
  }, [stepSwitchingTo]);

  const handleStepChange = useCallback((step: number) => {
    if (currentStep === step) return;
    setStepSwitching(step);
  }, [currentStep]);

  const handleNextStep = useCallback(() => {
    handleStepChange(currentStep + 1);
  }, [currentStep, handleStepChange]);

  const handpePrevStep = useCallback(() => {
    handleStepChange(currentStep - 1);
  }, [currentStep, handleStepChange]);

  const contextValue: IStepContext = {
    step: currentStep,
    theme,
    onStepChange: handleStepChange,
    onNextStep: handleNextStep,
    onPrevStep: handpePrevStep,
  };

  const renderStep = () => {
    const { Component } = steps[currentStep];

    return (
      <StepContext.Provider value={contextValue}>
        <Component className={clsx(styles.step, { [styles.disappear]: !!stepSwitchingTo })} />
      </StepContext.Provider>
    );
  };

  return (
    <div className={clsx(styles.steps, styles[`step-${currentStep}`], styles[theme])}>
      {renderStep()}
    </div>
  );
}

export default Views;
