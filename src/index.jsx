import React from 'react';
import ReactDOM from 'react-dom';
import 'sass/style.scss';
import MarkdownInput from 'components/MarkdownInput';
import NoteDisplay from 'components/NoteDisplay';

const App = () => (
  <div>
    <NoteDisplay />
    <MarkdownInput />
  </div>
);


ReactDOM.render(<App />, document.getElementById('root'));