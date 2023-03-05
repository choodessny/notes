import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { createNote } from "./store/reducers/notes";
import { DEFAULT_NOTE_TEXT } from "./defaultNoteText";
import markdownToTxt from "markdown-to-txt";

const initNotes = () => {
  store.dispatch(
    createNote({
      id: 1,
      title: "Тестовое задание",
      text: DEFAULT_NOTE_TEXT,
      preview: "Кудрявцева Анастасия",
      plainText: markdownToTxt(DEFAULT_NOTE_TEXT),
      date: Date.now(),
    })
  );
};

const isInited = localStorage.getItem("isInited");
if (!isInited) {
  initNotes();
  localStorage.setItem("isInited", "true");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
