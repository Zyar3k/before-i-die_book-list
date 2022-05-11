import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

import "../user_option.scss";

const SortUser = ({ setOptionOpen }) => {
  return (
    <section className="optionSection sortOptions">
      <button className="closeModalButton" onClick={() => setOptionOpen(false)}>
        <CloseIcon />
      </button>
      <h3 className="optionName">Sortowanie</h3>
      <ul className="ulOptions sort">
        <li className="ulOptions__option">
          <button>
            <KeyboardArrowUpIcon />
          </button>
          <p>Ilość stron</p>
          <button>
            <KeyboardArrowDownIcon />
          </button>
        </li>
        <li className="ulOptions__option">
          <button>
            <KeyboardArrowUpIcon />
          </button>
          <p>Nazwisko autora</p>
          <button>
            <KeyboardArrowDownIcon />
          </button>
        </li>
        <li className="ulOptions__option">
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
  );
};

export default SortUser;
