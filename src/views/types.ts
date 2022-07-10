/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

export type TStepTheme = 'white' | 'black';

export interface IStepProps {
  className?: string;
}

export interface IStepContext {
  onNextStep: () => void;
  onPrevStep: () => void;
  theme: TStepTheme;
}

export interface IStep {
  theme: TStepTheme;
  path: string;
  Component: (props: IStepProps) => JSX.Element;
}
