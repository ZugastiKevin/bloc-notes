import React, { useState } from 'react';
import NoteDisplay from 'components/NoteDisplay';

function MarkdownInput() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const notes = {...localStorage};
  let titles = [];

  for (let title in notes) {
    titles.push(title);
  };

  const popNote = (index) => {
    setTitle(index);
    setContent(localStorage.getItem(index));
  };

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const contentChange = (event) => {
    setContent(event.target.value);
  };

  const beginNote = () => {
    setTitle('');
    setContent('');
  }

  const handleClick = () => {
    localStorage.setItem(title, content);
    window.location.reload(false);
  };

  return (
    <div className="stucturing">
      <div className="colomn left">
        <button className="btn-red inLeft" type="btn" onClick={beginNote}>Ajouter une note</button>
        <ul>
          {titles && titles.map((item, index) => {
            return <li key={index}><button onClick={() => popNote(item)}>{item}</button></li>
          })}
        </ul>
      </div>
      <div className="colomn">
        <NoteDisplay title={title} content={content} />
        <input className="form" placeholder="Votre Titre" value={title} onChange={titleChange} />
        <textarea className="form" placeholder="Votre contenu" value={content} onChange={contentChange} />
        <button className="btn-red inRight" type="btn" onClick={handleClick}>Sauvergarder</button>
      </div>
    </div>
  );
}

export default MarkdownInput;