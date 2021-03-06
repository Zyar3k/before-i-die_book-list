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

export default function appReducer(state, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        all: true,
        error: "",
        lists: { lista: [] },
        filtered: [],
        filters: [],
        book: state.book,
      };
    case FETCH_ERROR:
      return { loading: false, books: [], error: "Something went wrong!" };

    case GET_ONE_BOOK:
      return {
        loading: false,
        book: action.payload,
        error: "",
        searched: false,
        books: state.books,
        lists: state.lists,
        filtered: [],
        filters: [],
      };
    case FETCH_ONE_ERROR:
      return { loading: false, book: {}, error: "Something went wrong!" };

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
      return { ...state, lists: state.lists };
    case ADD_BOOK_LIST_DATA:
      const bookData = action.payload;
      bookData.forEach((item) => {
        item.list.map((element) => {
          return state.lists[element].push(item);
        });
      });
      state.lists.lista = bookData;
      return { ...state, lists: state.lists };
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
        all: false,
      };
    case CLEAR_SEARCH:
      return { ...state, searched: null, all: true };

    case FILTER:
      let { value, checked } = action.payload;
      let filters = state.filters;
      const duplicateFilter = filters.includes(value);
      const valueToPositive = value.slice(2);
      const valueToNegative = `un${value}`;
      if (!duplicateFilter) {
        if (checked) {
          filters.push(value);
          if (value.substring(0, 2) === "un") {
            const check = state.filters.includes(valueToPositive);
            if (check)
              filters = filters.filter((item) => item !== valueToPositive);
            state.filters = filters;
          } else {
            const check = state.filters.includes(valueToNegative);
            if (check)
              filters = filters.filter((item) => item !== valueToNegative);
            state.filters = filters;
          }
        } else {
          filters = filters.filter((item) => item !== value);
        }
      }
      if (filters.length === 1) {
        const singleFilter = filters[0];
        singleFilter.substring(0, 2) === "un"
          ? (state.filtered = state.books.filter(
              (book) => !book[valueToPositive]
            ))
          : (state.filtered = state.books.filter((book) => book[singleFilter]));
      } else if (filters.length === 2) {
        const isFirNeg = filters[0].substring(0, 2) === "un";
        const isSecNeg = filters[1].substring(0, 2) === "un";
        const firstSliced = filters[0].slice(2);
        const secondSliced = filters[1].slice(2);
        let firstFilter, secondFilter;
        isFirNeg
          ? (firstFilter = state.books.filter((book) => !book[firstSliced]))
          : (firstFilter = state.books.filter((book) => book[filters[0]]));
        isSecNeg
          ? (secondFilter = firstFilter.filter((book) => !book[secondSliced]))
          : (secondFilter = firstFilter.filter((book) => book[filters[1]]));
        state.filtered = secondFilter;
      }
      return {
        ...state,
        filtered: state.filtered,
        filters: filters,
        all: false,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: [],
        filters: [],
        all: true,
      };

    case SORT_BOOKS:
      const sortBy = action.payload;
      let sortedList;
      state.all ? (sortedList = state.books) : (sortedList = state.filtered);
      const isUp = sortBy.slice(-2) === "Up";
      if (isUp) {
        const sortOpt = sortBy.slice(0, -2);
        if (sortOpt === "lastName") {
          sortedList.sort((a, b) =>
            a.author[sortOpt] > b.author[sortOpt] ? "1" : "-1"
          );
        } else {
          sortedList.sort((a, b) => (a[sortOpt] > b[sortOpt] ? "1" : "-1"));
        }
      } else {
        const sortOpt = sortBy.slice(0, -4);
        if (sortOpt === "lastName") {
          sortedList.sort((a, b) =>
            a.author[sortOpt] < b.author[sortOpt] ? "1" : "-1"
          );
        } else {
          sortedList.sort((a, b) => (a[sortOpt] < b[sortOpt] ? "1" : "-1"));
        }
      }
      return { ...state };
    default:
      return state;
  }
}
