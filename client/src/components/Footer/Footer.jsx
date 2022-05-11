import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CloseIcon from "@mui/icons-material/Close";

import "./Footer.scss";

const Footer = () => {
  const [optionOpen, setOptionOpen] = useState({
    filter: false,
    sort: true,
    search: false,
  });
  const filters = 10; // TODO: get filters from context

  const openOneOption = (e) => {
    const option = e.target.value;
    setOptionOpen({
      filter: false,
      sort: false,
      search: false,
      [option]: true,
    });
  };

  return (
    <footer>
      <button value="filter" onClick={(e) => openOneOption(e)}>
        Filtrowanie
      </button>
      <button value="sort" onClick={(e) => openOneOption(e)}>
        Sortowanie
      </button>
      <button value="search" onClick={(e) => openOneOption(e)}>
        Szukaj
      </button>

      {optionOpen.filter && (
        <section>
          <button
            className="closeModalButton"
            onClick={() => setOptionOpen(false)}
          >
            <CloseIcon />
          </button>

          <ul className="filterOptions">
            <li className="filterOptions__option">
              <label>
                <input name="readed-options" type="radio" />
                Przeczytane
              </label>
              <label>
                Nieprzeczytane
                <input name="readed-options" type="radio" />
              </label>
            </li>
            <li className="filterOptions__option">
              <label>
                <input name="available-options" type="radio" />
                Dostępne
              </label>
              <label>
                Niedostępne
                <input name="available-options" type="radio" />
              </label>
            </li>
            {filters > 0 && (
              <li className="filterOptions__option">
                <label>
                  <button>
                    <HighlightOffIcon />
                  </button>
                  Usuń filtry
                </label>
              </li>
            )}
          </ul>
        </section>
      )}
      {optionOpen.sort && (
        <section>
          <button
            className="closeModalButton"
            onClick={() => setOptionOpen(false)}
          >
            <CloseIcon />
          </button>
          <ul className="sortOptions">
            <li className="sortOptions__option">
              <button>
                <KeyboardArrowUpIcon />
              </button>
              <p>Ilość stron</p>
              <button>
                <KeyboardArrowDownIcon />
              </button>
            </li>
            <li className="sortOptions__option">
              <button>
                <KeyboardArrowUpIcon />
              </button>
              <p>Nazwisko autora</p>
              <button>
                <KeyboardArrowDownIcon />
              </button>
            </li>
            <li className="sortOptions__option">
              <button>
                <KeyboardArrowUpIcon />
              </button>
              <p>Ranking</p>
              <button>
                <KeyboardArrowDownIcon />
              </button>
            </li>
          </ul>
        </section>
      )}
      {optionOpen.search && (
        <section className="searchSection">
          <button
            className="closeModalButton"
            onClick={() => setOptionOpen(false)}
          >
            <CloseIcon />
          </button>
          <h3>Wyszukaj książkę</h3>
          <input className="searchSection__input" type="text" />
        </section>
      )}
    </footer>
  );
};

export default Footer;
