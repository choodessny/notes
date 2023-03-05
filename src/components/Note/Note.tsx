import { Header } from "../Header/Header";
import { CreateButton } from "../CreateButton/CreateButton";
import { useCurrentId } from "../../hooks/useCurrentId";
import { useAppSelector } from "../../store/store";
import { Editor } from "../Editor/Editor";

export const Note = () => {
  const currentNoteId = useCurrentId();
  const notes = useAppSelector((state) => state.notes.notes);
  const currentNote = currentNoteId ? notes[currentNoteId] : null;

  if (!currentNote) {
    return null;
  }
  return <Editor note={currentNote} />;
};
