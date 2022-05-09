import { FormControlLabel, Radio } from "@mui/material";

const RadioController = ({ clearRadios, value }) => {
  const capitalizeValue = value.charAt(0).toUpperCase() + value.slice(1);
  return (
    <FormControlLabel
      value={value}
      control={<Radio size="small" checked={clearRadios} />}
      label={capitalizeValue}
    />
  );
};

export default RadioController;
