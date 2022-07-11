// types
import { IEditorFile } from 'src/components/editor/types';

const editorFiles: Array<IEditorFile> = [
  {
    name: 'frontend.html',
    body: [
      { text: '<!DOCTYPE html>' },
      { text: '<html lang="en-US">' },
      { text: '<body>', tab: 1 },
      { text: '<ul>', tab: 2 },
      { text: '<li>HTML/CSS</li>', tab: 3 },
      { text: '<li>JavaScript</li>', tab: 3 },
      { text: '<li>TypeScript</li>', tab: 3 },
      { text: '<li>React.js</li>', tab: 3 },
      { text: '<li>Redux</li>', tab: 3 },
      { text: '<li>Jest</li>', tab: 3 },
      { text: '<li>Gatsby</li>', tab: 3 },
      { text: '<li>Next.js</li>', tab: 3 },
      { text: '<li>SCSS</li>', tab: 3 },
      { text: '<!-- Redux-Thunk, Redux-Saga, Material UI, Webpack, Babel, Bootstrap', tab: 3, comment: true },
      { text: 'Sanity.io ,Styled-Components ,Formik ,Figma ,Ant.Design -->', tab: 3, comment: true },
      { text: '</ul>', tab: 2 },
      { text: '</body>', tab: 1 },
      { text: '</html>' },
    ],
  },
  {
    name: 'backend.js',
    body: [
      { text: 'const express = require("express");' },
      { text: 'const app = express();' },
      { text: 'const PORT = 3000;' },
      { text: '' },
      { text: 'app.use(Node.js);' },
      { text: 'app.use(Express.js);' },
      { text: 'app.use(Nest.js);' },
      { text: 'app.use(MongoDB);' },
      { text: 'app.use(SQL);' },
      { text: 'app.use(Docker);' },
      { text: 'app.use(*ORM);' },
      { text: 'app.use(AWS);' },
      { text: 'app.use(Google Cloud);' },
      { text: 'app.use(Loopback.io);' },
      { text: '// Other: Swagger, Firebase, Netlify, Mongoose, Heroku', comment: true },
      { text: ' ' },
      { text: 'app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));' },
    ],
  },
];

export default editorFiles;
