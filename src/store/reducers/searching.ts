import { createSlice } from "@reduxjs/toolkit";

export type TSearch = {
  text: string;
};
const initialState: TSearch = {
  text: "",
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (store, action: { payload: string }) => {
      store.text = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
