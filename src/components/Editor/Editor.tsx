import { NoteDate } from "../NoteDate/NoteDate";
import styles from "./Editor.module.scss";
import markdownToTxt from "markdown-to-txt";
import React, { useEffect, useRef } from "react";
import { useTextPosition } from "../../providers/textPosition";
import { Note, useNotes } from "../../providers/notes";

type TEditorProps = {
  note: Note;
  onStopEditing: () => void;
};

export const Editor: React.FC<TEditorProps> = ({ note, onStopEditing }) => {
  const { setLine } = useTextPosition();
  const { editNote } = useNotes();
  useEffect(() => {
    setLine(0);
  }, [note.id]);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const updateCurrentLine = () => {
    const textArea = textAreaRef.current;
    if (!textArea) return;
    const linesBeforeCursor = textArea.value
      .substring(0, textArea.selectionStart)
      .split("\n");
    setLine(linesBeforeCursor.length - 1);
  };

  useEffect(() => {
    const outsideClickListener = (event: MouseEvent) => {
      if (
        textAreaRef.current &&
        !textAreaRef.current.contains(event.target as Node)
      ) {
        onStopEditing();
      }
    };
    window.addEventListener("click", outsideClickListener);
    return () => window.removeEventListener("click", outsideClickListener);
  }, []);

  return (
    <div className={styles.editorContainer}>
      <NoteDate note={note} />
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
            editNote({
              ...note,
              text: newText,
              title: newTitle,
              preview: newPreview,
              plainText: plainText,
            });
          }}
          value={note.text}
        />
      </div>
    </div>
  );
};
