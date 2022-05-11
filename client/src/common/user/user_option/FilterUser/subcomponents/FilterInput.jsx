import { useContext } from "react";
import { GlobalContext } from "../../../../../context/GlobalProvider";

const FilterInput = ({ handleOnChange, label, value }) => {
  const { filters } = useContext(GlobalContext);
  let test;
  switch (value) {
    case "readed":
      test = "Przeczytane";
      break;
    case "unreaded":
      test = "Nieprzeczytane";
      break;
    case "available":
      test = "Dostępna";
      break;
    case "unavailable":
      test = "Niedostępna";
      break;

    default:
      test = "Brak danych";
  }
  return (
    <label>
      {test}
      <input
        name={`${label}-options`}
        type="radio"
        value={value}
        onChange={handleOnChange}
        checked={filters.includes(value) === true}
      />
    </label>
  );
};

export default FilterInput;
