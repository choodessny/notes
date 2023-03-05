import { Header } from "../Header/Header";
import { List } from "../List/List";
import { CommonHeaderElements } from "../CommonHeaderElements/CommonHeaderElements";
import { useEffect, useRef, useState } from "react";
import { useCurrentId } from "../../hooks/useCurrentId";
import { Note } from "../Note/Note";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";
import { NoteHeaderElements } from "../NoteHeaderElements/NoteHeaderElements";
import { useNotes, useNotesCount } from "../../providers/notes";

export const TilesView = () => {
  const noteCount = useNotesCount();
  const previosNoteCount = useRef<number>(noteCount);
  const {notes} = useNotes()
  const currentNoteId = useCurrentId();
  const [isOpened, setIsOpened] = useState<boolean>(!!currentNoteId);
  useEffect(() => {
    if (noteCount > previosNoteCount.current) {
      setIsOpened(true);
    }
    previosNoteCount.current = noteCount;
  }, [noteCount]);
  useEffect(() => {
    if (!currentNoteId || !notes[currentNoteId]) {
      setIsOpened(false);
    }
  }, [currentNoteId, notes]);
  return (
    <div>
      <Header>
        <IconButton
          disabled={!isOpened}
          onClick={() => {
            setIsOpened(false);
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <CommonHeaderElements />
        <NoteHeaderElements />
      </Header>
      {!isOpened && <List onDoubleClick={() => setIsOpened(true)} />}
      {isOpened && <Note />}
    </div>
  );
};
