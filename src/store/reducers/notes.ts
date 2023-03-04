import { createSlice } from "@reduxjs/toolkit";

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

export default notesSlice.reducer;
