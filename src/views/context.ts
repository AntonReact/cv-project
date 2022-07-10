// modules
import { createContext } from 'react';
// types
import { IStepContext } from './types';

const defaultValues: IStepContext = {
  onNextStep: () => {},
  onPrevStep: () => {},
  theme: 'white',
};

const StepContext = createContext<IStepContext>(defaultValues);

export default StepContext;
