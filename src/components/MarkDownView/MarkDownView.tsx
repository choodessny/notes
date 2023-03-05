import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Note } from "../../store/reducers/notes";
import { Date } from "../Date/Date";
import styles from "./MarkDownView.module.scss";

type TEditorProps = {
  note: Note;
  onClick?: () => void;
};

export const MarkDownView: React.FC<TEditorProps> = ({ note, onClick }) => {
  return (
    <div className={styles.containerMarkDown} onClick={onClick}>
      <Date note={note} />
      <ReactMarkdown>{note.text}</ReactMarkdown>
    </div>
  );
};
