import { useNavigate } from "react-router-dom";
import { createNote } from "../../store/reducers/notes";
import { useAppDispatch, useAppSelector } from "../../store/store";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import { IconButton } from "@mui/material";

export const CreateButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const nextId = useAppSelector((state) => state.notes.lastId + 1);
  return (
    <IconButton
      onClick={() => {
        dispatch(createNote({ text: "test text", title: "", id: nextId }));
        navigate(`/${nextId}`);
      }}
    >
      <BorderColorTwoToneIcon />
    </IconButton>
  );
};
