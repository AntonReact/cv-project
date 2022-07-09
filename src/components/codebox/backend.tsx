// types
import { ICodeboxTech } from './types';

interface IBackendProps {
  items: Array<ICodeboxTech>
  comments: Array<string>
}

function Backend(props: IBackendProps) {
  const { items, comments } = props;

  const renderItem = (item: ICodeboxTech, use: boolean = false) => {
    const { label, comment, strong } = item;

    if (comment) {
      return (
        <li>
          <code>{label}</code>
        </li>
      );
    }

    const body = (
      <code>
        {use ? 'app.use(' : ''}
        {strong ? <strong>{label}</strong> : label}
        {use ? ');' : ''}
      </code>
    );

    return (
      <li key={label}>
        {body}
      </li>
    );
  };

  const renderComments = () => (
    <li>
      <code>
        {'// Other: '}
        {comments.join(', ')}
      </code>
    </li>
  );

  return (
    <ol>
      {renderItem({ label: 'const express = require("express");' })}
      {renderItem({ label: 'const app = express();' })}
      {renderItem({ label: 'const PORT = 3000;' })}
      {renderItem({ label: ' ' })}
      {items.map((item) => renderItem(item, true))}
      {renderComments()}
      {renderItem({ label: '' })}
      {renderItem({ label: 'app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));' })}
    </ol>
  );
}

export default Backend;
