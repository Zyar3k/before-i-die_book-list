import { createContext, useState, useReducer } from "react";
import appReducer from "../reducers/AppReducer";

const initialState = {
  books: [],
};

export const GlobalContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <GlobalContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default StoreProvider;
