import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Note } from "../../store/reducers/notes";
import styles from "./TilePreview.module.scss";

type TTilePreviewProps = {
  note: Note;
};
export const TilesPreview: React.FC<TTilePreviewProps> = ({ note }) => {
  return (
    <div className={styles.previewTilesContainer}>
      <div className={styles.previewTilesInnerContainer}>
        <ReactMarkdown>{note.text}</ReactMarkdown>
      </div>
    </div>
  );
};
