import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Note } from "../../providers/notes";
import { NoteDate } from "../NoteDate/NoteDate";
import styles from "./MarkDownView.module.scss";

type TEditorProps = {
  note: Note;
  onClick?: () => void;
};

export const MarkDownView: React.FC<TEditorProps> = ({ note, onClick }) => {
  return (
    <div
      className={styles.containerMarkDown}
      onClick={(event) => {
        event.stopPropagation();
        onClick?.();
      }}
    >
      <NoteDate note={note} />
      <ReactMarkdown linkTarget={"_blank"}>{note.text}</ReactMarkdown>
    </div>
  );
};
