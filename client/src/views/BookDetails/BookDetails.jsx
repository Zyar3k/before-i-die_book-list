import { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LoadingProgress } from "../../common";
import { Tooltip, Zoom } from "@mui/material";
import {
  KeyArrUpp,
  KeyArrDwn,
  BookIcon,
  ShortcutIcon,
  MobileIcon,
  TimerIcon,
} from "../../helpers/iconsImport";
import {
  first100letters,
  multiplyStars,
  readingTimeCounter,
  time,
} from "../../helpers/bookDetails";
import logoLC from "../../assets/lc.png";

import { GlobalContext } from "../../context/GlobalProvider";

import "./BookDetails.scss";
import { RenderIf } from "../../helpers/RenderIf";

const BookDetails = () => {
  const { book, fetchOneBook } = useContext(GlobalContext);
  const [isDescExtend, setIsDescExtend] = useState(false);
  const isEmpty = Object.keys(book).length === 0;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchOneBook(id);
    console.log("useEffect");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  let bookRating = Number(book.rating?.$numberDecimal);
  let adminBookRating = Number(book.adminRating?.$numberDecimal);

  return (
    <div>
      {isEmpty ? (
        <LoadingProgress />
      ) : (
        <section className="bookDetails" style={{ color: "white" }}>
          <div className="bookDetails__info">
            <p className="bookDetails__info--id">ID: {book._id}</p>
            <p className="bookDetails__info--author">{`${book.author.name} ${book.author.lastName}`}</p>
            <Tooltip title="Obecność na listach" placement="right">
              <p className="bookDetails__info--listRank">
                {multiplyStars(book.list.length)}
              </p>
            </Tooltip>
            <p className="bookDetails__info--title">{book.title}</p>
          </div>
          <div className="bookDetails__pages">
            <Tooltip title="Liczba stron" arrow TransitionComponent={Zoom}>
              <p className="bookDetails__pages--page">
                <BookIcon /> {book.page} str.
              </p>
            </Tooltip>
            <Tooltip
              arrow
              TransitionComponent={Zoom}
              title="Szacowany przelicznik: 200 słów na minutę, czyli 1 strona na 1 minutę czytania."
            >
              <p className="bookDetails__pages--time">
                <TimerIcon /> {readingTimeCounter(book.page)}
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
                <img src={logoLC} alt="lubimy czytac logo" />
              </a>
            </Tooltip>
            <p>
              {isDescExtend
                ? book.desc
                : book.desc === ""
                ? "Opis pojawi się wkrótce..."
                : first100letters(book.desc)}
            </p>
            <p>
              <RenderIf condition={book.desc !== ""}>
                {isDescExtend ? (
                  <KeyArrUpp onClick={() => setIsDescExtend(!isDescExtend)} />
                ) : (
                  <KeyArrDwn onClick={() => setIsDescExtend(!isDescExtend)} />
                )}
              </RenderIf>
            </p>
          </div>
          <div className="bookDetails__ratings">
            <p>
              Ocena:
              <span>
                {bookRating !== 0 ? multiplyStars(bookRating) : "B/D"}
              </span>
            </p>
            <p>
              Ocena RQ:
              <span>
                {adminBookRating !== 0 ? multiplyStars(adminBookRating) : "B/D"}
              </span>
            </p>
          </div>

          <div className="bookDetails__adminInfo">
            <p>
              <RenderIf condition={book.readed}>
                <MobileIcon />
              </RenderIf>
            </p>
            <p>
              <RenderIf condition={book.available}>
                <ShortcutIcon />
              </RenderIf>
            </p>
          </div>

          <div className="bookDetails__moreInfo">
            <p>Utworzono: {time(book.createdAt)}</p>
            <p>Ostatnia modyfikacja: {time(book.updatedAt)}</p>
            {/* <p>createdBy: {book.createdBy}</p> */}
          </div>
          <div className="bookDetails__actions">
            <button onClick={() => navigate(-1)}>Wróć</button>
          </div>
        </section>
      )}
    </div>
  );
};

export default BookDetails;
