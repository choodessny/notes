import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { SearchContextWrapper } from "./providers/search";
import { TextPositionContextWrapper } from "./providers/textPosition";
import { ViewContextWrapper } from "./providers/view";
import { NotesContextWrapper } from "./providers/notes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchContextWrapper>
        <ViewContextWrapper>
          <TextPositionContextWrapper>
            <NotesContextWrapper>
              <App />
            </NotesContextWrapper>
          </TextPositionContextWrapper>
        </ViewContextWrapper>
      </SearchContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
