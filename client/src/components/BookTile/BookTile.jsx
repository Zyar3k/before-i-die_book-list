import { useState } from "react";
import "./BookTile.scss";

const BookTile = ({ book }) => {
  const [isPageShow, setIsPageShow] = useState(false);
  return (
    <article className="bookTile">
      <h3 className="bookTile__title">{book.title}</h3>
      <p className="bookTile__author">
        {`${book.author.name} ${book.author.lastName}`}
        {isPageShow && <span className="bookTile__page">({book.page})</span>}
      </p>
    </article>
  );
};

export default BookTile;
