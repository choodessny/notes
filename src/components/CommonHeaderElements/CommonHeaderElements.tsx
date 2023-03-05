import { Fragment } from "react";
import FormatListBulletedTwoToneIcon from "@mui/icons-material/FormatListBulletedTwoTone";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import { IconButton } from "@mui/material";
import { Spacer } from "../Spacer/Spacer";
import { useCurrentId } from "../../hooks/useCurrentId";
import { TView, useView } from "../../providers/view";
import { useNotes } from "../../providers/notes";

export const CommonHeaderElements = () => {
  const { setView } = useView();
  const { deleteNote } = useNotes();
  const currentNoteId = useCurrentId();
  return (
    <Fragment>
      <IconButton
        title="Отобразить в форме списка"
        onClick={() => {
          setView(TView.list);
        }}
      >
        <FormatListBulletedTwoToneIcon />
      </IconButton>
      <IconButton
        title="Отобразить в форме плиток"
        onClick={() => {
          setView(TView.tiles);
        }}
      >
        <GridViewTwoToneIcon />
      </IconButton>
      <Spacer />
      <IconButton
        disabled={!currentNoteId}
        onClick={() => {
          if (currentNoteId) {
            deleteNote(currentNoteId);
          }
        }}
      >
        <DeleteOutlineTwoToneIcon />
      </IconButton>
    </Fragment>
  );
};
