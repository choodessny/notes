import { Header } from "../Header/Header";
import { CreateButton } from "../CreateButton/CreateButton";
import { useCurrentId } from "../../hooks/useCurrentId";
import { useAppSelector } from "../../store/store";
import { Editor } from "../Editor/Editor";
import { useEffect, useState } from "react";
import { MarkDownView } from "../MarkDownView/MarkDownView";

export const Note = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const currentNoteId = useCurrentId();
  const notes = useAppSelector((state) => state.notes.notes);
  const currentNote = currentNoteId ? notes[currentNoteId] : null;
  useEffect(() => {
    if (currentNote?.text !== "") {
      setIsEditing(false);
    }
  }, [currentNoteId]);
  useEffect(() => {
    if (currentNote?.text === "") {
      setIsEditing(true);
    }
  }, [currentNote?.text]);
  if (!currentNote) {
    return null;
  }
  if (!isEditing) {
    return (
      <MarkDownView
        note={currentNote}
        onClick={() => {
          setIsEditing(true);
        }}
      />
    );
  }
  return <Editor note={currentNote} />;
};
