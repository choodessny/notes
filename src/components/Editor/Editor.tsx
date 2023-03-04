import dayjs from "dayjs";
import { Note } from "../../store/reducers/notes";
import styles from "./Editor.module.scss";

type TEditorProps = {
  note: Note;
};

export const Editor: React.FC<TEditorProps> = ({ note }) => {
  return (
    <div className={styles.editorContainer}>
      <div className={styles.date}>
        {dayjs(note.date).format("DD MMMM YYYY г. в hh:mm")}
      </div>
      <div className={styles.text}>{note.text}</div>
    </div>
  );
};
