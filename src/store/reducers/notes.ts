import { createSlice } from "@reduxjs/toolkit";

export type Note = {
  text: string;
  id: number;
  title: string;
};

const initialState: Note[] = [];

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: (store, action: { payload: Omit<Note, "id"> }) => {
      store.push({
        ...action.payload,
        id: (store[store.length - 1]?.id || 0) + 1,
      });
    },
  },
});

export const { createNote } = notesSlice.actions;

export default notesSlice.reducer;
