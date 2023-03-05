import { useEffect, useMemo } from "react";
import { useCurrentId } from "./useCurrentId";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../providers/search";
import { useNotes } from "../providers/notes";

export const useNotesIds = () => {
  const { text } = useSearch();
  const { notes, idsList } = useNotes();
  const currentId = useCurrentId();
  const navigate = useNavigate();
  const filterIds = useMemo(() => {
    if (!text) {
      return idsList;
    }
    const lowerCaseInputText = text.toLowerCase();
    return idsList.filter((id) => {
      const note = notes[id];
      return note.plainText.toLowerCase().includes(lowerCaseInputText);
    });
  }, [text, idsList, notes]);
  useEffect(() => {
    if (!currentId || !filterIds.includes(currentId)) {
      navigate(`/${filterIds[0] || ""}`);
    }
  }, [filterIds, currentId]);
  return filterIds;
};
