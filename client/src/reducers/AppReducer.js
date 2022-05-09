import {
  FETCH_ERROR,
  FETCH_SUCCESS,
  SET_NAMES,
  ADD_BOOK_LIST_DATA,
  SEARCH_BOOK,
  CLEAR_SEARCH,
} from "../vars/vars";

export default function appReducer(state, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        all: true,
        error: "",
        lists: { lista: [] },
      };
    case FETCH_ERROR:
      return {
        loading: false,
        books: [],
        error: "Something went wrong!",
      };
    case SET_NAMES:
      const data = action.payload;
      let listNames = [];
      data.forEach((element) => {
        element.list.map((item) => {
          return listNames.push(item);
        });
      });
      listNames = [...new Set(listNames)];
      listNames.forEach((element) => {
        state.lists[element] = [];
        state.lists[element] = data.filter((element) => {
          return element.list.includes(element);
        });
      });
      return {
        ...state,
        lists: state.lists,
      };
    case ADD_BOOK_LIST_DATA:
      const bookData = action.payload;
      bookData.forEach((item) => {
        item.list.map((element) => {
          return state.lists[element].push(item);
        });
      });
      state.lists.lista = bookData;
      return {
        ...state,
        lists: state.lists,
      };
    case SEARCH_BOOK:
      return {
        ...state,
        searched: state.books.filter((book) => {
          return (
            book.title.toLowerCase().includes(action.payload.toLowerCase()) ||
            book.author.lastName
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          );
        }),
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        searched: null,
      };

    default:
      return state;
  }
}
