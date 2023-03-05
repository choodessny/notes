import React from "react";
import dayjs from "dayjs";
import styles from "./Date.module.scss";
import { Note } from "../../store/reducers/notes";

type TDate = {
  note: Note;
};

export const Date: React.FC<TDate> = ({ note }) => {
  return (
    <div className={styles.date}>
      {dayjs(note.date).format("DD MMMM YYYY г. в hh:mm")}
    </div>
  );
};
