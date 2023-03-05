import { useDispatch } from "react-redux";
import { editNote, Note } from "../../store/reducers/notes";
import { Date } from "../Date/Date";
import styles from "./Editor.module.scss";

type TEditorProps = {
  note: Note;
  onBlur: () => void;
};

export const Editor: React.FC<TEditorProps> = ({ note, onBlur }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.editorContainer}>
      <Date note={note} />
      <div className={styles.text}>
        <textarea
          onBlur={onBlur}
          className={styles.textArea}
          onChange={(e) => {
            const newText = e.target.value;
            const newTitle =
              newText.split("\n").find((line) => !/^\s*$/.test(line)) ||
              "Без названия";
            dispatch(editNote({ ...note, text: newText, title: newTitle }));
          }}
          value={note.text}
        />
      </div>
    </div>
  );
};
