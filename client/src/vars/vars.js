// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";

const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";
const SET_NAMES = "SET_NAMES";
const ADD_BOOK_LIST_DATA = "ADD_BOOK_LIST_DATA";
const SEARCH_BOOK = "SEARCH_BOOK";
const CLEAR_SEARCH = "CLEAR_SEARCH";
const FILTER = "FILTER";
const CLEAR_FILTER = "CLEAR_FILTER";
const SORT_BOOKS = "SORT_BOOKS";

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
    icon: <MenuBookTwoToneIcon />,
    sortBy: "page",
    name: "Ilość stron",
  },
  {
    icon: <PermIdentityTwoToneIcon />,
    sortBy: "lastName",
    name: "Nazwisko autora",
  },
  {
    icon: <StarTwoToneIcon />,
    sortBy: "rating",
    name: "Ranking",
  },
];
