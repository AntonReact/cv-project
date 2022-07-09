// utils
import clsx from 'src/utils/clsx';
import formatDate from 'src/utils/formatDate';
// styles
import styles from './date-period.module.scss';

interface IDatePeriodProps {
  start?: Date | number;
  end?: Date | number;
  total?: number;
  className?: string;
}

function DatePeriod(props: IDatePeriodProps) {
  const {
    start, end, className, total,
  } = props;

  const startLabel = start && formatDate(start);
  const endLabel = start && formatDate(end);

  const renderTotal = () => {
    if (!total) return null;
    const periodLabel = total === 1 ? 'year' : 'years';
    const label = `${total} ${periodLabel} total`;
    if (start) return <span>{`(${label})`}</span>;
    return <span>{label}</span>;
  };

  return (
    <div className={clsx(styles.datePeriod, className)}>
      <span>{startLabel}</span>
      {start && <span> - </span>}
      <span>{endLabel}</span>
      {renderTotal()}
    </div>
  );
}

DatePeriod.defaultProps = {
  start: null,
  end: null,
  total: null,
  className: '',
};

export default DatePeriod;
