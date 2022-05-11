import { useContext } from "react";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

import { sortArray } from "../../../../vars/vars";

import { GlobalContext } from "../../../../context/GlobalProvider";

import "../user_option.scss";

const SortUser = ({ setOptionOpen }) => {
  const { sortBooks, setIsPageShowing } = useContext(GlobalContext);
  const handleChange = (e) => {
    const checkPage = e.slice(0, 4);
    if (checkPage === "page") {
      setIsPageShowing(true);
    } else {
      setIsPageShowing(false);
    }
    sortBooks(e);
  };

  return (
    <section className="optionSection sortOptions">
      <button className="closeModalButton" onClick={() => setOptionOpen(false)}>
        <CloseIcon />
      </button>
      <h3 className="optionName">Sortowanie</h3>
      <ul className="ulOptions sort">
        {sortArray.map((item, index) => (
          <li className="ulOptions__option" key={index}>
            <button onClick={() => handleChange(`${item.sortBy}Up`)}>
              <KeyboardArrowUpIcon />
            </button>
            <p>{item.name}</p>
            <button onClick={() => handleChange(`${item.sortBy}Down`)}>
              <KeyboardArrowDownIcon />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SortUser;
