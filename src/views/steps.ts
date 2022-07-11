// types
import { IStep } from './types';
// components
import Welcome from './welcome';
import Projects from './projects';
import Skills from './skills';
import CV from './cv';

const steps: Array<IStep> = [
  {
    Component: Welcome,
    theme: 'white',
    path: '/welcome',
  },
  {
    Component: Skills,
    theme: 'white',
    path: '/skills',
  },
  {
    Component: Projects,
    theme: 'white',
    path: '/projects',
  },
  {
    Component: CV,
    theme: 'black',
    path: '/cv',
  },
];

export default steps;
