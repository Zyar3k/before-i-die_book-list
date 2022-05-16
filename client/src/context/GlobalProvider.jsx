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
  FILTER,
  CLEAR_FILTER,
  SORT_BOOKS,
  GET_ONE_BOOK,
  FETCH_ONE_ERROR,
} from "../vars/vars";

const initialState = {
  lists: { lista: [] },
  books: [],
  all: true,
  searched: null,
  filtered: [],
  filters: [],
  book: [],
};

export const GlobalContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPageShowing, setIsPageShowing] = useState(false);
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

  const fetchOneBook = async (id) => {
    axios
      .get(`${BASE_URL}/${id}`)
      .then((res) => {
        dispatch({ type: GET_ONE_BOOK, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_ONE_ERROR, payload: err.message });
      });
  };

  const createBook = async (book) => {
    try {
      await axios.post(`${BASE_URL}/admin/books/create`, book, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  const editBook = async (id, book) => {
    try {
      await axios.patch(`${BASE_URL}/admin/books/${id}`, book, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/admin/books/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchData();
    } catch (err) {
      console.log(err);
    }
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

  const filter = (data) => {
    dispatch({ type: FILTER, payload: data });
  };
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  const sortBooks = (data) => {
    dispatch({ type: SORT_BOOKS, payload: data });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        state,
        books: state.books,
        isAdmin,
        lists: state.lists,
        filtered: state.filtered,
        searched: state.searched,
        filters: state.filters,
        all: state.all,
        sorted: state.sorted,
        token,
        myStorage,
        isPageShowing,
        book: state.book,
        setIsPageShowing,
        setIsAdmin,
        fetchData,
        searchBook,
        clearSearch,
        filter,
        clearFilter,
        sortBooks,
        fetchOneBook,
        createBook,
        deleteBook,
        editBook,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default StoreProvider;
