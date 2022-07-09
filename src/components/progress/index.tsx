// styles
import styles from './progress.module.scss';

interface IProgress {
  value: number;
  max: number;
}

function Progress(props: IProgress) {
  const { value, max } = props;
  const width = `${(value / max) * 100}%`;

  return (
    <div className={styles.progress}>
      <div className={styles.bar} style={{ width }} />
    </div>
  );
}

export default Progress;
