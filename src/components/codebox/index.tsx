// modules
import { useCallback } from 'react';
// utils
import clsx from '../../utils/clsx';
// components
import Frontend from './frontend';
import Button from '../button';
import Backend from './backend';
// types
import { ICodeboxTech } from './types';
// styles
import styles from './codebox.module.scss';

interface ICodeboxProps {
  type: 'Front-End' | 'Back-End';
  list: Array<ICodeboxTech>;
  className?: string;
}

const parseList = (list: Array<ICodeboxTech>) => list.reduce((acc: { items: Array<ICodeboxTech>, comments: Array<string>}, c: ICodeboxTech) => {
  if (c.comment) acc.comments.push(c.label);
  else acc.items.push(c);
  return acc;
}, { items: [], comments: [] });

function Codebox(props: ICodeboxProps) {
  const { type, list, className } = props;
  const { items, comments } = parseList(list);

  const handleClick = useCallback(() => {
    const copyList = list.map(({ label }) => label);
    navigator.clipboard.writeText(copyList.join(', '));
  }, [list]);

  const renderList = () => {
    if (type === 'Front-End') return <Frontend items={items} comments={comments} />;
    if (type === 'Back-End') return <Backend items={items} comments={comments} />;
    return null;
  };

  return (
    <div className={clsx(styles.codebox, className)}>
      <div className={styles.title}>{type}</div>
      <Button className={styles.copyButton} onClick={handleClick}>copy to clipboard</Button>
      {renderList()}
    </div>
  );
}

Codebox.defaultProps = {
  className: '',
};

export default Codebox;
