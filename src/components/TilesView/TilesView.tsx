import { CreateButton } from "../CreateButton/CreateButton";
import { Spacer } from "../Spacer/Spacer";
import { Header } from "../Header/Header";
import { List } from "../List/List";
import { CommonHeaderElements } from "../CommonHeaderElements/CommonHeaderElements";
import { useState } from "react";
import { useCurrentId } from "../../hooks/useCurrentId";
import { Note } from "../Note/Note";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";
import { NoteHeaderElement } from "../NoteHeaderElement/NoteHeaderElement";

export const TilesView = () => {
  const currentNoteId = useCurrentId();
  const [isOpened, setIsOpened] = useState<boolean>(!!currentNoteId);
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
        <Spacer />
        <NoteHeaderElement />
      </Header>
      {!isOpened && <List onDoubleClick={() => setIsOpened(true)} />}
      {isOpened && <Note />}
    </div>
  );
};
