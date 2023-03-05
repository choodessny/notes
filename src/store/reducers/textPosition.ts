import { createSlice } from "@reduxjs/toolkit";

export type TSearch = {
  line: number;
};

const initialState: TSearch = {
  line: 0,
};

export const textPositionSlice = createSlice({
  name: "textPosition",
  initialState,
  reducers: {
    setLine: (store, action: { payload: number }) => {
      store.line = action.payload;
    },
  },
});

export const { setLine } = textPositionSlice.actions;
export default textPositionSlice.reducer;
