// modules
import React, { useState } from 'react';
// utils
import clsx from 'src/utils/clsx';
// assets
import JS from 'src/assets/js.svg';
import HTML from 'src/assets/html.svg';
// types
import { IEditorBodyItem, IEditorFile } from './types';
// styles
import styles from './editor.module.scss';

interface IEditorProps {
  files?: Array<IEditorFile>;
  name?: string;
  className?: string;
}

const getFileIcon = (type: string) => {
  switch (type) {
    case 'js': return JS;
    case 'html': return HTML;
    default: return null;
  }
};

const generateTab = (tab: number = 0) => {
  const arr = Array.from(Array(tab).keys());
  return arr.map((i) => (<React.Fragment key={i + 1}>&emsp;</React.Fragment>));
};

const highlightChildren = (text: string) => {
  // eslint-disable-next-line no-useless-escape
  const arrows = text.split(/(?<=>)(.*?)(?=<)/); // finds everything between '>' and '<'
  const brackets = text.includes('"') ? [] : text.split(/(?<=\()(.*?)(?=\))/); // finds everything between '(' and ')' without double quotes - "
  const split = arrows.length > brackets.length ? arrows : brackets;

  if (split.length !== 3) return text;
  return (
    <>
      {split[0]}
      <strong>{split[1]}</strong>
      {split[2]}
    </>
  );
};

function Editor(props: IEditorProps) {
  const { className, files, name } = props;
  const [currentFile, setCurrentFile] = useState(() => files?.[0]);
  const [tabs, setTabs] = useState<Array<IEditorFile>>(() => (files?.[0] ? [files?.[0]] : []));

  const handleClickFile = (file: IEditorFile) => () => {
    setCurrentFile(file);
    const hasInTabs = tabs.find((tab) => file.name === tab.name);
    if (!hasInTabs) setTabs([...tabs, file]);
  };

  const handleCloseTab = (item: IEditorFile) => (e: any) => {
    e.stopPropagation();
    const newTabs = tabs.filter((tab) => tab.name !== item.name);
    const index = tabs.findIndex((tab) => tab.name === item.name);
    const newCurrentFile = index + 1 > newTabs.length ? index - 1 : index;

    setTabs(newTabs);
    setCurrentFile(newTabs[newCurrentFile]);
  };

  const renderListItem = (file: IEditorFile) => {
    const isActive = file.name === currentFile?.name;
    const split = file.name.split('.');
    const fileFormat = split[split.length - 1];
    const icon = getFileIcon(fileFormat);

    return (
      <li
        key={file.name}
        className={clsx(styles.listItem, { [styles.active]: isActive })}
        onClick={handleClickFile(file)}
        onKeyDown={handleClickFile(file)}
        role="menuitem"
      >
        {icon && <img className={styles.fileFormatIcon} src={icon} alt={fileFormat} />}
        {file.name}
      </li>
    );
  };

  const renderBodyItem = (row: IEditorBodyItem, index: number) => {
    const { text, tab, comment } = row;
    const space = generateTab(tab);

    return (
      <li key={index} className={clsx(styles.row, { [styles.comment]: comment })}>
        {space}
        <code>{highlightChildren(text)}</code>
      </li>
    );
  };

  const renderTab = (tab: IEditorFile) => {
    const isActive = tab.name === currentFile?.name;

    return (
      <div
        key={tab.name}
        className={clsx(styles.tab, { [styles.active]: isActive })}
        onClick={handleClickFile(tab)}
        onKeyDown={handleClickFile(tab)}
        role="button"
        tabIndex={0}
      >
        {tab.name}
        <div
          className={styles.closeIcon}
          onClick={handleCloseTab(tab)}
          onKeyDown={handleCloseTab(tab)}
          role="button"
          tabIndex={0}
        >
          &#x2715;
        </div>
      </div>
    );
  };

  return (
    <div className={clsx(styles.editor, className)}>
      <div className={styles.sidebar}>
        <div className={styles.title}>{name}</div>
        <ul>
          {files?.map(renderListItem)}
        </ul>
      </div>
      <div className={styles.body}>
        <div className={styles.tabs}>
          {tabs.map(renderTab)}
        </div>
        <ol>
          {currentFile?.body.map(renderBodyItem)}
        </ol>
      </div>
    </div>
  );
}

Editor.defaultProps = {
  files: [{ name: 'index.js', body: [] }],
  className: '',
  name: 'cv-project',
};

export default Editor;
