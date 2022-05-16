import FilterInput from "./FilterInput";

const FilterOption = ({ handleOnChange, label }) => {
  const labelToLowerCase = label.toLowerCase();
  return (
    <li className="ulOptions__option">
      <FilterInput
        handleOnChange={handleOnChange}
        value={labelToLowerCase}
        label={label}
      />
      <FilterInput
        handleOnChange={handleOnChange}
        value={`un${labelToLowerCase}`}
        label={label}
      />
    </li>
  );
};

export default FilterOption;
