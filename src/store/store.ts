import { configureStore } from "@reduxjs/toolkit";
import notes from "./reducers/notes";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: { notes },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = <Selected>(
  selector: (state: RootState) => Selected
) => useSelector(selector);
export const useAppDispatch = () => useDispatch<AppDispatch>();
