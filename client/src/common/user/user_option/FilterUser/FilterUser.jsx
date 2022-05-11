import CloseIcon from "@mui/icons-material/Close";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import "../user_option.scss";

const FilterUser = ({ setOptionOpen }) => {
  const filters = 0; // TODO: get filters from context
  return (
    <section className="optionSection">
      <button className="closeModalButton" onClick={() => setOptionOpen(false)}>
        <CloseIcon />
      </button>
      <h3 className="optionName">Filtry</h3>
      {filters > 0 && (
        <div className="clearButtonWrapper">
          <label>
            <button>
              <HighlightOffIcon />
            </button>
            Usuń filtry
          </label>
        </div>
      )}
      <ul className="ulOptions filter">
        <li className="ulOptions__option">
          <label>
            <input name="readed-options" type="radio" />
            Przeczytane
          </label>
          <label>
            Nieprzeczytane
            <input name="readed-options" type="radio" />
          </label>
        </li>
        <li className="ulOptions__option">
          <label>
            <input name="available-options" type="radio" />
            Dostępne
          </label>
          <label>
            Niedostępne
            <input name="available-options" type="radio" />
          </label>
        </li>
      </ul>
    </section>
  );
};

export default FilterUser;
