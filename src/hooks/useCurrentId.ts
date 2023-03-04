import { useMatch } from "react-router-dom";

export const useCurrentId = () => {
  const match = useMatch("/:id");
  const currentNoteId = match?.params?.id;
  return currentNoteId ? Number(currentNoteId) : null;
};
