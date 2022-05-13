import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingProgress } from "../../common";
import { Tooltip } from "@mui/material";

import TimerIcon from "@mui/icons-material/Timer";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";

import { GlobalContext } from "../../context/GlobalProvider";

import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";

import logoLC from "../../assets/lc.png";

import "./BookDetails.scss";

const BookDetails = () => {
  const { book, fetchOneBook } = useContext(GlobalContext);
  const [isDescExtend, setIsDescExtend] = useState(false);
  const isEmpty = Object.keys(book).length === 0;
  const { id } = useParams();

  const getOneBook = (id) => fetchOneBook(id);

  const multiplyStars = (stars) => {
    let result = [];
    for (let i = 0; i < stars; i++) {
      result.push(<StarIcon key={i} />);
    }
    return result;
  };

  const time = (date) => {
    return new Date(date).toLocaleDateString("pl", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  const first100letters = (text) => {
    return text.substring(0, 100) + "...";
  };

  // console.log(book.list);
  useEffect(() => {
    getOneBook(id);
  }, [id]);
  return (
    <div>
      {isEmpty ? (
        <LoadingProgress />
      ) : (
        <section className="bookDetails" style={{ color: "white" }}>
          <div className="bookDetails__info">
            <p className="bookDetails__info--id">ID: {book._id}</p>
            <p className="bookDetails__info--author">{`${book.author.name} ${book.author.lastName}`}</p>
            <p className="bookDetails__info--listRank">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </p>
            <p className="bookDetails__info--title">{book.title}</p>
          </div>
          <div className="bookDetails__pages">
            <Tooltip title="Liczba stron" arrow TransitionComponent={Zoom}>
              <p className="bookDetails__pages--page">
                <MenuBookTwoToneIcon /> {book.page} str.
              </p>
            </Tooltip>
            <Tooltip
              arrow
              TransitionComponent={Zoom}
              title="Szacowany przelicznik: 200 słów na minutę, czyli 1 strona na 1 minutę czytania."
            >
              <p className="bookDetails__pages--time">
                <TimerIcon /> 3 godz. 32 min.
              </p>
            </Tooltip>
          </div>
          <div className="bookDetails__lists">
            {book.list.map((list, index) => (
              <p key={index}>{list}</p>
            ))}
          </div>
          <div className="bookDetails__description">
            <Tooltip
              arrow
              TransitionComponent={Zoom}
              title="Szczegółowe informacje o książce."
            >
              <a
                className="bookDetails__description--link"
                href={book.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={logoLC} alt="" />
              </a>
            </Tooltip>
            <p>{isDescExtend ? book.desc : first100letters(book.desc)}</p>
            <p>
              {isDescExtend ? (
                <KeyboardArrowUpIcon
                  onClick={() => setIsDescExtend(!isDescExtend)}
                />
              ) : (
                <KeyboardArrowDownIcon
                  onClick={() => setIsDescExtend(!isDescExtend)}
                />
              )}
            </p>
            {/* <p>Opis: {book.desc}</p> */}
          </div>
          <div className="bookDetails__ratings">
            <p>adminRating: {multiplyStars(book.adminRating)}</p>
            <p>rating: {multiplyStars(book.rating)}</p>
          </div>
          <div className="bookDetails__adminInfo">
            <p>readed: {book.readed ? "true" : "false"}</p>
            <p>available: {book.available ? "true" : "false"}</p>
          </div>
          <div className="bookDetails__moreInfo">
            <p>Utworzono: {time(book.createdAt)}</p>
            <p>Ostatnia modyfikacja: {time(book.updatedAt)}</p>
            <p>createdBy: {book.createdBy}</p>
            <h1></h1>
          </div>
        </section>
      )}
    </div>
  );
};

export default BookDetails;
