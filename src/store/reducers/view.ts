import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export enum TView {
  "list",
  "tiles",
}

type TViewSlice = {
  view: TView;
};
const initialState: TViewSlice = {
  view: TView.list,
};
export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    changeView: (store, action: { payload: TView }) => {
      store.view = action.payload;
    },
  },
});

export const { changeView } = viewSlice.actions;

export default persistReducer({ key: "view", storage }, viewSlice.reducer);
