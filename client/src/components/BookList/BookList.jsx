import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../../common/";
import BookTile from "../BookTile/BookTile";

import { GlobalContext } from "../../context/GlobalProvider";

import "./BookList.scss";

const BookList = () => {
  const { books, searched, all, filtered } = useContext(GlobalContext);
  const [displayData, setDisplayData] = useState(books);

  useEffect(() => {
    if (all === true) {
      setDisplayData(books);
    } else if (searched) {
      setDisplayData(searched);
    } else if (all !== true) {
      setDisplayData(filtered);
    }
  }, [books, searched, all, filtered]);
  return (
    <>
      <ul className="bookList">
        {displayData.map((book) => (
          <Link className="bookLink" to={`/${book._id}`} key={book._id}>
            <BookTile book={book} />
          </Link>
        ))}
      </ul>
      <ScrollToTop />
    </>
  );
};

export default BookList;
