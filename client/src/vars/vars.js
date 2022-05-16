import { StarIcon, PersonIcon, BookIcon } from "../helpers/iconsImport";

const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";
const SET_NAMES = "SET_NAMES";
const ADD_BOOK_LIST_DATA = "ADD_BOOK_LIST_DATA";
const SEARCH_BOOK = "SEARCH_BOOK";
const CLEAR_SEARCH = "CLEAR_SEARCH";
const FILTER = "FILTER";
const CLEAR_FILTER = "CLEAR_FILTER";
const SORT_BOOKS = "SORT_BOOKS";
const GET_ONE_BOOK = "GET_ONE_BOOK";
const FETCH_ONE_ERROR = "FETCH_ONE_ERROR";

export {
  FETCH_SUCCESS,
  FETCH_ERROR,
  SET_NAMES,
  ADD_BOOK_LIST_DATA,
  SEARCH_BOOK,
  CLEAR_SEARCH,
  FILTER,
  CLEAR_FILTER,
  SORT_BOOKS,
  GET_ONE_BOOK,
  FETCH_ONE_ERROR,
};

export const inputLabels = [
  "Title",
  "Link",
  "Name",
  "LastName",
  "Page",
  "List",
  "Desc",
];
export const readAvaLabel = ["Readed", "Available"];
export const starsLabels = ["Admin rank", "Rank"];

export const sortArray = [
  {
    icon: <BookIcon />,
    sortBy: "page",
    name: "Ilość stron",
  },
  {
    icon: <PersonIcon />,
    sortBy: "lastName",
    name: "Nazwisko autora",
  },
  {
    icon: <StarIcon />,
    sortBy: "rating",
    name: "Ranking",
  },
];
