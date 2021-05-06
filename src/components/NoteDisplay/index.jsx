
import MarkdownView from 'react-showdown';

const NoteDisplay = (props) => {
  return (
    <div>
      <div className="note">
        <h1>{props.title}</h1>
        <MarkdownView
          markdown={props.content}
          options={{ tables: true, emoji: true }}
        />
      </div>
    </div>
  );
}

export default NoteDisplay;