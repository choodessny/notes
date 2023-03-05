import { useNavigate } from "react-router-dom";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { IconButton } from "@mui/material";
import { useNextId, useNotes } from "../../providers/notes";

export const CreateButton = () => {
  const navigate = useNavigate();
  const nextId = useNextId();
  const { createNote } = useNotes();
  return (
    <IconButton
      onClick={() => {
        createNote({
          preview: "Нет дополнительного текста",
          plainText: "",
          text: "",
          title: "Без названия",
          id: nextId,
          date: new Date().getTime(),
        });
        navigate(`/${nextId}`);
      }}
    >
      <NoteAddIcon />
    </IconButton>
  );
};
