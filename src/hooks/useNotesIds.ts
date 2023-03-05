import { useEffect, useMemo } from "react";
import { useAppSelector } from "../store/store";
import { useCurrentId } from "./useCurrentId";
import { useNavigate } from "react-router-dom";

export const useNotesIds = () => {
  const idsList = useAppSelector((state) => state.notes.idsList);
  const inputText = useAppSelector((state) => state.search.text);
  const notes = useAppSelector((state) => state.notes.notes);
  const currentId = useCurrentId();
  const navigate = useNavigate();
  const filterIds = useMemo(() => {
    if (!inputText) {
      return idsList;
    }
    const lowerCaseInputText = inputText.toLowerCase();
    return idsList.filter((id) => {
      const note = notes[id];
      return note.plainText.toLowerCase().includes(lowerCaseInputText);
    });
  }, [inputText, idsList, notes]);
  useEffect(() => {
    if (!currentId || !filterIds.includes(currentId)) {
      navigate(`/${filterIds[0] || ""}`);
    }
  }, [filterIds, currentId]);
  return filterIds;
};
