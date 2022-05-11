import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalProvider";
import BookTile from "../BookTile/BookTile";

import "./BookList.scss";

const BookList = () => {
  const { books } = useContext(GlobalContext);
  return (
    <>
      <ul className="bookList">
        {books.map((book) => (
          <BookTile key={book._id} book={book} />
        ))}
      </ul>
    </>
  );
};

export default BookList;
