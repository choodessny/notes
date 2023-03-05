import { useCurrentId } from "../../hooks/useCurrentId";
import { Editor } from "../Editor/Editor";
import { useEffect, useState } from "react";
import { MarkDownView } from "../MarkDownView/MarkDownView";
import { useNotes } from "../../providers/notes";

export const Note = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const currentNoteId = useCurrentId();
  const { notes } = useNotes();
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
  return (
    <Editor onStopEditing={() => setIsEditing(false)} note={currentNote} />
  );
};
