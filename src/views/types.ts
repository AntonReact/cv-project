/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

export type TStepTheme = 'white' | 'black';

export interface IStepProps {
  className?: string;
}

export interface IStepContext {
  onStepChange: (step: number) => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  step: number;
  theme: TStepTheme;
}

export interface IStep {
  theme: TStepTheme;
  Component: (props: IStepProps) => JSX.Element;
}
