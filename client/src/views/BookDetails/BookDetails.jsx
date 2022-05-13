import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { LoadingProgress } from "../../common";

import { GlobalContext } from "../../context/GlobalProvider";

const BookDetails = () => {
  const { book, fetchOneBook } = useContext(GlobalContext);
  const isEmpty = Object.keys(book).length === 0;

  const location = useLocation();
  const path = location.pathname.slice(1);

  const getOneBook = (id) => fetchOneBook(id);

  useEffect(() => {
    getOneBook(path);
  }, [path]);
  return (
    <div>
      {isEmpty ? (
        <LoadingProgress />
      ) : (
        <section style={{ color: "white" }}>
          <p>ID: {book._id}</p>
          <h1>{book.title}</h1>
          <h2>{book.author.lastName}</h2>
          <h2>{`${book.author.name} ${book.author.lastName}`}</h2>
          <p>page: {book.page}</p>
          <p>list: {book.list}</p>
          <p>link: {book.link}</p>
          <p>readed: {book.readed ? "true" : "false"}</p>
          <p>available: {book.available ? "true" : "false"}</p>
          <p>desc: {book.desc}</p>
          <p>createdBy: {book.createdBy}</p>
          <p>adminRating: {book.adminRating}</p>
          <p>rating: {book.rating}</p>
          <p>createdAt: {book.createdAt}</p>
          <p>updatedAt: {book.updatedAt}</p>
        </section>
      )}
    </div>
  );
};

export default BookDetails;
