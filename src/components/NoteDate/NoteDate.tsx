import React from "react";
import dayjs from "dayjs";
import { Note } from "../../providers/notes";
import styles from "./NoteDate.module.scss";

type TDate = {
  note: Note;
};

export const NoteDate: React.FC<TDate> = ({ note }) => {
  return (
    <div className={styles.date}>
      {dayjs(note.date).format("DD MMMM YYYY г. в hh:mm")}
    </div>
  );
};
