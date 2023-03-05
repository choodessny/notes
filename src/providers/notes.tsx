import markdownToTxt from "markdown-to-txt";
import React, { useEffect } from "react";
import { DEFAULT_NOTE_TEXT } from "../defaultNoteText";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { noop } from "../utils/noop";

export type Note = {
  text: string;
  id: number;
  title: string;
  preview: string;
  date: number;
  plainText: string;
};

type TNotesContextType = {
  idsList: number[];
  notes: Record<number, Note>;
  lastId: number;

  deleteNote: (id: number) => void;
  createNote: (note: Note) => void;
  editNote: (note: Note) => void;
};

const NotesContext = React.createContext<TNotesContextType>({
  idsList: [],
  notes: {},
  lastId: 0,

  deleteNote: noop,
  createNote: noop,
  editNote: noop,
});

export const NotesContextWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [notes, setNotes] = useLocalStorageState<TNotesContextType["notes"]>(
    "notes",
    {}
  );
  const [idsList, setIdsList] = useLocalStorageState<
    TNotesContextType["idsList"]
  >("idsList", []);
  const [lastId, setLastId] = useLocalStorageState<TNotesContextType["lastId"]>(
    "lastId",
    0
  );

  const deleteNote = (id: number) => {
    const newNotes = { ...notes };
    delete newNotes[id];
    setNotes(newNotes);
    setIdsList(idsList.filter((noteId) => noteId !== id));
  };

  const createNote = (note: Note) => {
    const newNotes = { ...notes };
    newNotes[note.id] = note;
    setNotes(newNotes);
    setIdsList([note.id, ...idsList]);
    setLastId(note.id);
  };

  const editNote = (note: Note) => {
    const newNotes = { ...notes };
    newNotes[note.id] = note;
    setNotes(newNotes);
    setIdsList([note.id, ...idsList.filter((noteId) => noteId !== note.id)]);
  };

  useEffect(() => {
    const isInited = localStorage.getItem("isInited");
    if (!isInited) {
      createNote({
        id: 1,
        title: "Тестовое задание",
        text: DEFAULT_NOTE_TEXT,
        preview: "Кудрявцева Анастасия",
        plainText: markdownToTxt(DEFAULT_NOTE_TEXT),
        date: Date.now(),
      });
      localStorage.setItem("isInited", "true");
    }
  }, []);

  return (
    <NotesContext.Provider
      value={{
        idsList,
        notes,
        lastId,
        deleteNote,
        createNote,
        editNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => React.useContext(NotesContext);

export const useNextId = () => {
  const { lastId } = useNotes();
  return lastId + 1;
};

export const useNotesCount = () => {
  const { idsList } = useNotes();
  return idsList.length;
};
