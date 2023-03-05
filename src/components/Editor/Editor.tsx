import { useDispatch } from "react-redux";
import { editNote, Note } from "../../store/reducers/notes";
import { Date } from "../Date/Date";
import styles from "./Editor.module.scss";
import markdownToTxt from "markdown-to-txt";
import { useEffect, useRef } from "react";
import { setLine } from "../../store/reducers/textPosition";

type TEditorProps = {
  note: Note;
};

export const Editor: React.FC<TEditorProps> = ({ note }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLine(0));
  }, [note.id]);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const updateCurrentLine = () => {
    const textArea = textAreaRef.current;
    if (!textArea) return;
    const linesBeforeCursor = textArea.value
      .substring(0, textArea.selectionStart)
      .split("\n");
    dispatch(setLine(linesBeforeCursor.length - 1));
  };

  return (
    <div className={styles.editorContainer}>
      <Date note={note} />
      <div className={styles.text}>
        <textarea
          ref={textAreaRef}
          placeholder="Введите текст заметки"
          autoFocus
          onKeyUp={updateCurrentLine}
          onClick={updateCurrentLine}
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
