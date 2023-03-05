import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import styles from "./TilesItem.module.scss";
import { useCurrentId } from "../../hooks/useCurrentId";
import classNames from "classnames";
import { TilesPreview } from "../TilePreview/TilePreview";

type TTilesItemProps = {
  id: number;
  onDoubleClick?: () => void;
};

export const TilesItem: React.FC<TTilesItemProps> = ({ id, onDoubleClick }) => {
  const currentNoteId = useCurrentId();
  const notes = useAppSelector((state) => state.notes.notes);
  const navigate = useNavigate();
  const note = notes[id];
  return (
    <div
      className={styles.tilesContainer}
      onClick={() => navigate(`/${id}`)}
      onDoubleClick={onDoubleClick}
    >
      <div
        className={classNames(styles.tilesItemContainer, {
          [styles.selected]: currentNoteId === id,
        })}
      >
        <TilesPreview note={note} />
      </div>
      <div className={styles.tilesItem}>
        <div className={styles.title}>{note.title}</div>
        <div className={styles.date}>
          {dayjs(note.date).format(
            dayjs(note.date).isSame(dayjs(), "day") ? "hh:mm" : "DD.MM.YYYY"
          )}
        </div>
      </div>
    </div>
  );
};
