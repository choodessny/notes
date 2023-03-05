import React, { useState } from "react";
import { noop } from "../utils/noop";

type TSearchContextType = {
  text: string;
  setText: (text: string) => void;
};

const SearchContext = React.createContext<TSearchContextType>({
  text: "",
  setText: noop,
});

export const SearchContextWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [text, setText] = useState<string>("");
  return (
    <SearchContext.Provider value={{ text, setText }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => React.useContext(SearchContext);
