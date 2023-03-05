import { useNavigate } from "react-router-dom";
import { createNote, editNote } from "../../store/reducers/notes";
import { useAppDispatch, useAppSelector } from "../../store/store";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { IconButton } from "@mui/material";

export const CreateButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const nextId = useAppSelector((state) => state.notes.lastId + 1);
  return (
    <IconButton
      onClick={() => {
        dispatch(
          createNote({
            preview: "Нет дополнительного текста",
            plainText: "",
            text: "",
            title: "Без названия",
            id: nextId,
            date: new Date().getTime(),
          })
        );
        navigate(`/${nextId}`);
      }}
    >
      <NoteAddIcon />
    </IconButton>
  );
};
