// modules
import { useContext } from 'react';
// components
import PageButtons from 'src/components/page-buttons';
import Editor from 'src/components/editor';
import StepContext from 'src/views/context';
// utils
import clsx from 'src/utils/clsx';
import editorFiles from './data';
// types
import { IStepProps } from '../types';
// styles
import styles from './skills.module.scss';

function Skills(props: IStepProps) {
  const { className } = props;
  const { onPrevStep, onNextStep } = useContext(StepContext);

  return (
    <div className={clsx(styles.skills, className)}>
      <h2>
        Skills
      </h2>
      <Editor files={editorFiles} className={styles.codeContainer} />
      <PageButtons prev={{ onClick: onPrevStep }} next={{ onClick: onNextStep, label: 'projects' }} />
    </div>
  );
}

export default Skills;
