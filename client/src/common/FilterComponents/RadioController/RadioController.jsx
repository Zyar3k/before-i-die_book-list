import { useContext } from "react";
import { FormControlLabel, Radio } from "@mui/material";

import { GlobalContext } from "../../../context/GlobalProvider";

const RadioController = ({ value }) => {
  const { filters } = useContext(GlobalContext);
  const capitalizeValue = value.charAt(0).toUpperCase() + value.slice(1);

  return (
    <FormControlLabel
      value={value}
      control={
        <Radio size="small" checked={filters.includes(value) === true} />
      }
      label={capitalizeValue}
    />
  );
};

export default RadioController;
