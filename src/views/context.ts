// modules
import { createContext } from 'react';
// types
import { IStepContext } from './types';

const defaultValues: IStepContext = {
  onStepChange: () => {},
  onNextStep: () => {},
  onPrevStep: () => {},
  step: 0,
  theme: 'white',
};

const StepContext = createContext<IStepContext>(defaultValues);

export default StepContext;
