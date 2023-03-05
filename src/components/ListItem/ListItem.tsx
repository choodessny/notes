import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import styles from "./ListItem.module.scss";
import { useCurrentId } from "../../hooks/useCurrentId";
import classNames from "classnames";
import { useNotes } from "../../providers/notes";

type TListItemProps = {
  id: number;
};

export const ListItem: React.FC<TListItemProps> = ({ id }) => {
  const currentNoteId = useCurrentId();
  const { notes } = useNotes();
  const navigate = useNavigate();
  const note = notes[id];
  return (
    <div
      className={classNames(styles.listItemContainer, {
        [styles.selected]: currentNoteId === id,
      })}
    >
      <div className={styles.listItem} onClick={() => navigate(`/${id}`)}>
        <div className={styles.title}>{note.title}</div>
        <div className={styles.secondLine}>
          <div>
            {dayjs(note.date).format(
              dayjs(note.date).isSame(dayjs(), "day") ? "hh:mm" : "DD.MM.YYYY"
            )}
          </div>

          <div className={styles.preview}>{note.preview}</div>
        </div>
      </div>
    </div>
  );
};
