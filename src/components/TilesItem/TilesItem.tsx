import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import styles from "./TilesItem.module.scss";
import { useCurrentId } from "../../hooks/useCurrentId";
import classNames from "classnames";

type TypeTilesItemProps = {
  id: number;
};

export const TilesItem: React.FC<TypeTilesItemProps> = ({ id }) => {
  const currentNoteId = useCurrentId();
  const notes = useAppSelector((state) => state.notes.notes);
  const navigate = useNavigate();
  const note = notes[id];
  return (
    <div className={styles.tilesContainer}>
      <div
        onClick={() => navigate(`/${id}`)}
        className={classNames(styles.tilesItemContainer, {
          [styles.selected]: currentNoteId === id,
        })}
      ></div>
      <div className={styles.tilesItem} onClick={() => navigate(`/${id}`)}>
        <div className={styles.title}>{note.title}</div>
        <div>
          <div>
            {dayjs(note.date).format(
              dayjs(note.date).isSame(dayjs(), "day") ? "hh:mm" : "DD.MM.YYYY"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
