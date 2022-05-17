import { Tooltip } from "@mui/material";
import { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../context/GlobalProvider";

import "./BookTile.scss";

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
    <Tooltip
      arrow
      title={isBest ? "Obecna na wszystkich listach" : ""}
      leaveDelay={600}
    >
      <article className={isBest ? "bookTile best" : "bookTile"}>
        <h3 className="bookTile__title">{book.title}</h3>
        <p className="bookTile__author">
          {`${book.author.name} ${book.author.lastName}`}
          {isPageShowing && (
            <span className="bookTile__page">({book.page})</span>
          )}
        </p>
      </article>
    </Tooltip>
  );
};

export default BookTile;
