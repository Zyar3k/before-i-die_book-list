import { useContext, useEffect, useState } from "react";
import { CloseIcon } from "../../../helpers/iconsImport";

import { GlobalContext } from "../../../context/GlobalProvider";

import "../user_option.scss";
import { Tooltip } from "@mui/material";

const SearchUser = ({ setOptionOpen }) => {
  const { searchBook, clearSearch } = useContext(GlobalContext);
  const [searchValue, setSearchValue] = useState("");

  const handleClick = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue !== "") {
      searchBook(searchValue);
    } else {
      clearSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <section className="optionSection searchSection">
      <button className="closeModalButton" onClick={() => setOptionOpen(false)}>
        <CloseIcon />
      </button>
      <h3 className="optionName">Wyszukaj książkę</h3>
      <Tooltip
        title="Wyszukaj po tytule lub nazwisku autora"
        placement="bottom"
        enterDelay={900}
      >
        <input
          className="optionSection__input"
          type="text"
          onChange={handleClick}
        />
      </Tooltip>
    </section>
  );
};

export default SearchUser;
