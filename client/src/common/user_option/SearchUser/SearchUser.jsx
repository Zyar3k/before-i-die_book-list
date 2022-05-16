import { useContext, useEffect, useState } from "react";
import { CloseIcon } from "../../../helpers/iconsImport";

import { GlobalContext } from "../../../context/GlobalProvider";

import "../user_option.scss";

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
  }, [searchValue, clearSearch, searchBook]);

  return (
    <section className="optionSection searchSection">
      <button className="closeModalButton" onClick={() => setOptionOpen(false)}>
        <CloseIcon />
      </button>
      <h3 className="optionName">Wyszukaj książkę</h3>
      <input
        className="optionSection__input"
        type="text"
        onChange={handleClick}
      />
    </section>
  );
};

export default SearchUser;
