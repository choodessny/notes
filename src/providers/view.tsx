import React from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { noop } from "../utils/noop";

export enum TView {
  "list",
  "tiles",
}

type TViewContextType = {
  view: TView;
  setView: (text: TView) => void;
};

const ViewContext = React.createContext<TViewContextType>({
  view: TView.list,
  setView: noop,
});

export const ViewContextWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [view, setView] = useLocalStorageState<TView>("view", TView.list);
  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => React.useContext(ViewContext);
