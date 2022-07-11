/* eslint-disable no-unused-vars */
// modules
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import {
  Routes, Route, useLocation, useNavigate,
} from 'react-router-dom';
// utils
import clsx from 'src/utils/clsx';
import steps from './steps';
// components
import StepContext from './context';
// types
import { IStep, IStepContext } from './types';
// styles
import styles from './views.module.scss';

const STEP_CHANGE_DELAY: number = 1000;

function Views() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [stepSwitchingTo, setStepSwitching] = useState<number | null>(null);

  const currentStep = useMemo(() => {
    const index = steps.findIndex(({ path }) => path === pathname);
    if (index === -1) return null;
    return { index, ...steps[index] };
  }, [pathname]);

  useEffect(() => {
    const paths = steps.map(({ path }) => path);
    if (!paths.includes(pathname)) navigate(paths[0]);
  }, [pathname]);

  useEffect(() => {
    if (stepSwitchingTo === null) return;
    setTimeout(() => {
      navigate(steps[stepSwitchingTo].path);
      setStepSwitching(null);
    }, STEP_CHANGE_DELAY);
  }, [stepSwitchingTo]);

  const handleStepChange = useCallback((step: number) => {
    if (currentStep?.index === step || step > steps.length || step < 0) return;
    setStepSwitching(step);
  }, [currentStep]);

  const handleNextStep = useCallback(() => {
    const hasIndex = currentStep?.index === 0 || currentStep?.index;
    const next = hasIndex ? currentStep.index + 1 : 0;
    handleStepChange(next);
  }, [currentStep, handleStepChange]);

  const handpePrevStep = useCallback(() => {
    const hasIndex = currentStep?.index === 0 || currentStep?.index;
    const prev = hasIndex ? currentStep.index - 1 : 0;
    handleStepChange(prev);
  }, [currentStep, handleStepChange]);

  const contextValue: IStepContext = useMemo(() => ({
    theme: currentStep?.theme || 'white',
    onStepChange: handleStepChange,
    onNextStep: handleNextStep,
    onPrevStep: handpePrevStep,
  }), [handleStepChange, handleNextStep, handpePrevStep]);

  const renderRoute = (step: IStep) => {
    const { path, Component } = step;

    return (
      <Route
        key={path}
        path={path}
        element={<Component className={clsx(styles.step, { [styles.disappear]: !!stepSwitchingTo })} />}
      />
    );
  };

  return (
    <div className={clsx(styles.steps, currentStep && styles[currentStep.theme])}>
      <StepContext.Provider value={contextValue}>
        <Routes>
          {steps.map(renderRoute)}
        </Routes>
      </StepContext.Provider>
    </div>
  );
}

export default Views;
