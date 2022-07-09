// components
import Button from 'src/components/button';
// styles
import styles from './page-buttons.module.scss';

interface IPageButton {
  label?: string;
  onClick: () => void;
}

interface IPageButtonsProps {
  prev: IPageButton;
  next?: IPageButton;
}

function PageButtons(props: IPageButtonsProps) {
  const { prev, next } = props;
  const prevLabel = prev.label || 'go back';
  const nextLabel = next?.label || 'next';

  return (
    <div className={styles.pageButtons}>
      <Button onClick={prev.onClick}>{prevLabel}</Button>
      {next && <Button onClick={next.onClick}>{nextLabel}</Button>}
    </div>
  );
}

PageButtons.defaultProps = {
  next: null,
};

export default PageButtons;
