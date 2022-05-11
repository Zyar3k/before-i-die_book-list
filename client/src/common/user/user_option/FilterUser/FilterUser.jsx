import { useContext } from "react";
import { readAvaLabel } from "../../../../vars/vars";
import CloseIcon from "@mui/icons-material/Close";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { GlobalContext } from "../../../../context/GlobalProvider";
import FilterOption from "./subcomponents/FilterOption";

import "../user_option.scss";

const FilterUser = ({ setOptionOpen }) => {
  const { filter, clearFilter, filters } = useContext(GlobalContext);

  const handleOnChange = (e) => filter(e.target);
  const handleRefresh = () => clearFilter();

  return (
    <section className="optionSection">
      <button className="closeModalButton" onClick={() => setOptionOpen(false)}>
        <CloseIcon />
      </button>
      <h3 className="optionName">Filtry</h3>
      {filters.length > 0 && (
        <div className="clearButtonWrapper">
          <label>
            <button onClick={handleRefresh}>
              <HighlightOffIcon />
            </button>
            Usuń filtry
          </label>
        </div>
      )}
      <ul className="ulOptions filter">
        {readAvaLabel.map((label, index) => (
          <FilterOption
            key={index}
            handleOnChange={handleOnChange}
            label={label}
          />
        ))}
      </ul>
    </section>
  );
};

export default FilterUser;
