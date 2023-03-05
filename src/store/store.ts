import { configureStore } from "@reduxjs/toolkit";
import notes from "./reducers/notes";
import view from "./reducers/view";
import { useDispatch, useSelector } from "react-redux";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: { notes, view },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = <Selected>(
  selector: (state: RootState) => Selected
) => useSelector(selector);
export const useAppDispatch = () => useDispatch<AppDispatch>();
