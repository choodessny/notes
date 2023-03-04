import { useNavigate } from "react-router-dom";
import { createNote } from "../../store/reducers/notes";
import { useAppDispatch, useAppSelector } from "../../store/store";

export const CreateButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const nextId = useAppSelector((state) => state.notes.lastId + 1);
  return (
    <button
      onClick={() => {
        dispatch(createNote({ text: "test text", title: "", id: nextId }));
        navigate(`/${nextId}`);
      }}
    >
      button
    </button>
  );
};
