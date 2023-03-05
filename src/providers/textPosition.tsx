import React, { useState } from "react";
import { noop } from "../utils/noop";

type TSearchContextType = {
  line: number;
  setLine: (line: number) => void;
};

const TextPositionContext = React.createContext<TSearchContextType>({
  line: 0,
  setLine: noop,
});

export const TextPositionContextWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [line, setLine] = useState<string>("");
  return (
    <TextPositionContext.Provider value={{ line, setLine }}>
      {children}
    </TextPositionContext.Provider>
  );
};

export const useTextPosition = () => React.useContext(TextPositionContext);
