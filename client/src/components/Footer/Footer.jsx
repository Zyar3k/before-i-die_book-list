import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchUser, SortUser, FilterUser } from "../../common/user_option";

import "./Footer.scss";

const Footer = () => {
  const [optionOpen, setOptionOpen] = useState({
    filter: false,
    sort: false,
    search: false,
  });
  const location = useLocation();
  const isBookList = location.pathname === "/";

  const openOneOption = (e) => {
    const option = e.target.value;
    setOptionOpen({
      filter: false,
      sort: false,
      search: false,
      [option]: true,
    });
  };
  useEffect(() => {}, [location.pathname]);

  return (
    <>
      {isBookList && (
        <footer>
          <button
            className="optionButton"
            value="filter"
            onClick={(e) => openOneOption(e)}
          >
            Filtrowanie
          </button>
          <button
            className="optionButton"
            value="sort"
            onClick={(e) => openOneOption(e)}
          >
            Sortowanie
          </button>
          <button
            className="optionButton"
            value="search"
            onClick={(e) => openOneOption(e)}
          >
            Szukaj
          </button>

          {optionOpen.filter && <FilterUser setOptionOpen={setOptionOpen} />}
          {optionOpen.sort && <SortUser setOptionOpen={setOptionOpen} />}
          {optionOpen.search && <SearchUser setOptionOpen={setOptionOpen} />}
        </footer>
      )}
    </>
  );
};

export default Footer;
