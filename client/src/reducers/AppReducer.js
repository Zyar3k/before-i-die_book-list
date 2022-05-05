import { FETCH_ERROR, FETCH_SUCCESS } from "./reducerVars";

export default function appReducer(state, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        all: true,
        error: "",
      };
    case FETCH_ERROR:
      return {
        loading: false,
        books: [],
        error: "Something went wrong!",
      };
    default:
      return state;
  }
}
