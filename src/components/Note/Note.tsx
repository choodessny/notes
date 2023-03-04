import { useMatch } from "react-router-dom";
import { useAppSelector } from "../../store/store";

export const Note = () => {
  const match = useMatch("/:id");
  const notes = useAppSelector((state) => state.notes);

  if (!match) return null;
  const currentNoteId = match.params.id;
  const currentNote = notes.notes[Number(currentNoteId)];

  if (!currentNote) return null;
  return <div> {currentNote.text}</div>;
};
