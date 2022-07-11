// modules
import { createContext } from 'react';
// types
import { IStepContext } from './types';

const defaultValues: IStepContext = {
  onNextStep: () => {},
  onPrevStep: () => {},
  onStepChange: () => {},
  theme: 'white',
};

const StepContext = createContext<IStepContext>(defaultValues);

export default StepContext;
