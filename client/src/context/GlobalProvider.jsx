import { createContext, useState, useReducer, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../configURL";

import appReducer from "../reducers/AppReducer";
import {
  FETCH_ERROR,
  FETCH_SUCCESS,
  SET_NAMES,
  ADD_BOOK_LIST_DATA,
  SEARCH_BOOK,
  CLEAR_SEARCH,
} from "../vars/vars";

const initialState = {
  lists: { lista: [] },
  books: [],
  all: true,
  searched: null,
};

export const GlobalContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [isAdmin, setIsAdmin] = useState(false);
  const myStorage = window.localStorage;
  const token = myStorage.getItem("adminToken");

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

  const setNames = (data) => {
    dispatch({ type: SET_NAMES, payload: data });
  };

  const addBookListData = (data) => {
    dispatch({ type: ADD_BOOK_LIST_DATA, payload: data });
  };
  const searchBook = (id) => {
    dispatch({ type: SEARCH_BOOK, payload: id });
  };
  const clearSearch = () => {
    dispatch({ type: CLEAR_SEARCH });
  };

  const adminLogin = async () => {
    if (token) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    setNames(state.books);
    addBookListData(state.books);
  }, [state.books]);

  useEffect(() => {
    adminLogin();
    fetchData();
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        state,
        books: state.books,
        isAdmin,
        lists: state.lists,
        setIsAdmin,
        all: state.all,
        token,
        myStorage,
        fetchData,
        searchBook,
        clearSearch,
        searched: state.searched,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default StoreProvider;
