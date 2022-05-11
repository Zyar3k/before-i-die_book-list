import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalProvider";
import BookTile from "../BookTile/BookTile";

import "./BookList.scss";

const BookList = () => {
  const { books, searched, all, filtered } = useContext(GlobalContext);
  const [displayData, setDisplayData] = useState(books);

  useEffect(() => {
    if (searched) {
      setDisplayData(searched);
    } else if (all === true) {
      setDisplayData(books);
    } else if (all !== true) {
      setDisplayData(filtered);
    }
  }, [books, searched, all, filtered]);
  return (
    <>
      <ul className="bookList">
        {displayData.map((book) => (
          <BookTile key={book._id} book={book} />
        ))}
      </ul>
    </>
  );
};

export default BookList;
