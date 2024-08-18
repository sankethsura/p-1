import { popupInitialState } from "./popup-reducer.js";
import popupReducer from "./popup-reducer.js";
import { createContext, useReducer } from "react";

export const PopupHandlerContext = createContext(popupInitialState);

export const PopupHandlerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(popupReducer, popupInitialState);

  return (
    <PopupHandlerContext.Provider value={{ state, dispatch }}>
      {children}
    </PopupHandlerContext.Provider>
  );
};
