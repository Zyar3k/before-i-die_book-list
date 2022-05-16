import { useContext, useEffect, useState } from "react";
import { percents, availableBooks, readedBooks } from "../../helpers/stats";
import { checkLastModification } from "../../helpers/bookDetails";
import { CustomProgress } from "../../common/";

import { GlobalContext } from "../../context/GlobalProvider";

import "./Statistic.scss";

const Statistic = () => {
  const { lists, books } = useContext(GlobalContext);
  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
    if (books.length !== 0) {
      setLastUpdate(checkLastModification(books));
    }
  }, [books]);

  return (
    <div className="statistic">
      <p className="lastUpdated">Ostatnia moodyfikacja listy: {lastUpdate}</p>
      <h1>Statystyki</h1>
      {Object.keys(lists).map((key) => (
        <div
          className={
            key === "lista" ? "statistic__item main" : "statistic__item"
          }
          key={key}
        >
          <h2>{key === "lista" ? "before I die" : key}</h2>
          <div className="statistic__item--info">
            <p>Książek na liście: {lists[key].length}</p>
            <div className="statistic__item--info--progress">
              <p>Przeczytanych: {readedBooks(lists[key])}</p>
              <CustomProgress
                value={percents(readedBooks(lists[key]), lists[key].length)}
              />
            </div>
            <div className="statistic__item--info--progress">
              <p>Dostępnych: {availableBooks(lists[key])}</p>
              <CustomProgress
                value={percents(availableBooks(lists[key]), lists[key].length)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistic;
