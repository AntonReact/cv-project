// modules
import React from 'react';
// types
import { ICodeboxTech } from './types';

interface IFrontendProps {
  items: Array<ICodeboxTech>;
  comments: Array<string>;
}

const generateTab = (tab: number) => {
  const arr = Array.from(Array(tab).keys());
  return arr.map((i) => (<React.Fragment key={i + 1}>&emsp;</React.Fragment>));
};

function Frontend(props: IFrontendProps) {
  const { items, comments } = props;

  const renderItem = (item: ICodeboxTech, tab: number = 0) => {
    const {
      label, li, strong,
    } = item;
    const space = generateTab(tab);

    const body = (
      <code>
        {li ? '<li>' : ''}
        {strong ? <strong>{label}</strong> : label}
        {li ? '</li>' : ''}
      </code>
    );

    return (
      <li key={label + new Date()}>
        {space}
        {body}
      </li>
    );
  };

  const renderComments = (tab: number = 0) => {
    const space = generateTab(tab);

    return (
      <li>
        {space}
        <code>
          {'<!-- Other: '}
          {comments.join(', ')}
          {' -->'}
        </code>
      </li>
    );
  };

  return (
    <ol>
      {renderItem({ label: '<!DOCTYPE html>' })}
      {renderItem({ label: '<html lang="en-US">' })}
      {renderItem({ label: '<body>' }, 1)}
      {renderItem({ label: '<ul>' }, 2)}
      {items.map((item) => renderItem(item, 3))}
      {renderComments(3)}
      {renderItem({ label: '</ul>' }, 2)}
      {renderItem({ label: '</body>' }, 1)}
      {renderItem({ label: '</html>' })}
    </ol>
  );
}

export default Frontend;
