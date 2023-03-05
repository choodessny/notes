import { Fragment } from "react";
import FormatListBulletedTwoToneIcon from "@mui/icons-material/FormatListBulletedTwoTone";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import { IconButton } from "@mui/material";
import { Spacer } from "../Spacer/Spacer";
import { changeView, TView } from "../../store/reducers/view";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../store/reducers/notes";
import { useCurrentId } from "../../hooks/useCurrentId";

export const CommonHeaderElements = () => {
    const dispatch = useDispatch();
    const currentNoteId = useCurrentId();
  return <Fragment>
    <IconButton
  title="Отобразить в форме списка"
  onClick={() => {
    dispatch(changeView(TView.list));
  }}
>
  <FormatListBulletedTwoToneIcon />
</IconButton>
<IconButton
  title="Отобразить в форме плиток"
  onClick={() => {
    dispatch(changeView(TView.tiles));
  }}
>
  <GridViewTwoToneIcon />
</IconButton>
<Spacer />
<IconButton
  disabled={!currentNoteId}
  onClick={() => {
    if (currentNoteId) {
      dispatch(deleteNote(currentNoteId));
    }
  }}
>
  <DeleteOutlineTwoToneIcon />
</IconButton></Fragment>;
};
