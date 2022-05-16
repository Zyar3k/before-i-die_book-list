import { useContext, useEffect, useState } from "react";
import "./BookTile.scss";

import { GlobalContext } from "../../context/GlobalProvider";

const BookTile = ({ book }) => {
  const { isPageShowing, lists } = useContext(GlobalContext);
  const [isBest, setIsBest] = useState(false);

  const numberOfLists = Object.keys(lists).length;
  const onTheList = book.list.length;

  useEffect(() => {
    if (onTheList + 1 === numberOfLists) {
      setIsBest(true);
    } else {
      setIsBest(false);
    }
  }, [onTheList, numberOfLists]);

  return (
    <article className={isBest ? "bookTile best" : "bookTile"}>
      <h3 className="bookTile__title">{book.title}</h3>
      <p className="bookTile__author">
        {`${book.author.name} ${book.author.lastName}`}
        {isPageShowing && <span className="bookTile__page">({book.page})</span>}
      </p>
    </article>
  );
};

export default BookTile;
