import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { editNote, Note } from "../../store/reducers/notes";
import styles from "./Editor.module.scss";

type TEditorProps = {
  note: Note;
};

export const Editor: React.FC<TEditorProps> = ({ note }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.editorContainer}>
      <div className={styles.date}>
        {dayjs(note.date).format("DD MMMM YYYY г. в hh:mm")}
      </div>
      <div className={styles.text}>
        <textarea
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
