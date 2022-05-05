import { createContext, useState, useReducer, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../configURL";

import appReducer from "../reducers/AppReducer";
import { FETCH_ERROR, FETCH_SUCCESS } from "../reducers/reducerVars";

const initialState = {
  books: [],
  all: true,
};

export const GlobalContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [isAdmin, setIsAdmin] = useState(false);

  const fetchData = async () => {
    axios
      .get(`${BASE_URL}/`)
      .then((res) => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_ERROR, payload: err.message });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <GlobalContext.Provider
      value={{ state, books: state.books, isAdmin, setIsAdmin, all: state.all }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default StoreProvider;
