import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export type Note = {
  text: string;
  id: number;
  title: string;
};

export type NotesState = {
  idsList: number[];
  notes: Record<number, Note>;
  lastId: number;
};

const initialState: NotesState = {
  idsList: [],
  notes: {},
  lastId: 0,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: (store, action: { payload: Note }) => {
      store.idsList.unshift(action.payload.id);
      store.notes[action.payload.id] = action.payload;
      store.lastId = action.payload.id;
    },
  },
});

export const { createNote } = notesSlice.actions;

export default persistReducer({ key: "notes", storage }, notesSlice.reducer);
