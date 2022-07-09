// modules
import React, { ReactNode } from 'react';
// utils
import clsx from 'src/utils/clsx';
// components
import DatePeriod from 'src/components/date-period';
// styles
import styles from './cv-section.module.scss';

interface ICVSectionProps {
  title: string;
  titleComponent?: keyof React.ReactHTML;
  startDate?: number | Date;
  endDate?: number | Date;
  totalYears?: number;
  stack?: Array<string>;
  children?: ReactNode;
  className?: string;
}

function CVSection(props: ICVSectionProps) {
  const {
    title, titleComponent, startDate, endDate, stack, className, children, totalYears,
  } = props;

  const renderStack = () => {
    if (!stack?.length) return null;
    return (
      <p className={styles.stack}>
        <strong>Stack: </strong>
        <i>{stack.join(', ')}</i>
      </p>
    );
  };

  const titleElement = React.createElement(
    titleComponent || 'h2',
    { className: styles.title },
    title,
  );

  return (
    <section className={clsx(styles.cvSection, className)}>
      {titleElement}
      <DatePeriod start={startDate} end={endDate} total={totalYears} />
      <div className={styles.body}>
        {children}
      </div>
      {renderStack()}
    </section>
  );
}

CVSection.defaultProps = {
  titleComponent: 'h2',
  startDate: null,
  endDate: null,
  totalYears: null,
  stack: null,
  children: null,
  className: '',
};

export default CVSection;
