import { useContext } from "react";
import "./BookTile.scss";

import { GlobalContext } from "../../context/GlobalProvider";

const BookTile = ({ book }) => {
  const { isPageShowing } = useContext(GlobalContext);

  return (
    <article className="bookTile">
      <h3 className="bookTile__title">{book.title}</h3>
      <p className="bookTile__author">
        {`${book.author.name} ${book.author.lastName}`}
        {isPageShowing && <span className="bookTile__page">({book.page})</span>}
      </p>
    </article>
  );
};

export default BookTile;
