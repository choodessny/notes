import { useDispatch } from "react-redux";
import { editNote, Note } from "../../store/reducers/notes";
import { Date } from "../Date/Date";
import styles from "./Editor.module.scss";
import markdownToTxt from "markdown-to-txt";

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
          placeholder="Введите текст заметки"
          autoFocus
          onBlur={onBlur}
          className={styles.textArea}
          onChange={(e) => {
            const newText = e.target.value;
            const plainText = markdownToTxt(newText);
            const notEmptyLines = plainText
              .split("\n")
              .filter((line) => line.trim());
            const newPreview = notEmptyLines[1] || "Нет дополнительного текста";
            const newTitle = notEmptyLines[0] || "Без названия";
            dispatch(
              editNote({
                ...note,
                text: newText,
                title: newTitle,
                preview: newPreview,
                plainText: plainText,
              })
            );
          }}
          value={note.text}
        />
      </div>
    </div>
  );
};
