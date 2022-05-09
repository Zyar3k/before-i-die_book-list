import { RadioGroup as Wrapper } from "@mui/material";
import RadioController from "../RadioController/RadioController";

const RadioGroup = ({ handleOnChange, clearRadios, label }) => {
  const labelToLowerCase = label.toLowerCase();
  return (
    <Wrapper row name={`${label}-options`} onChange={handleOnChange}>
      <RadioController clearRadios={clearRadios} value={labelToLowerCase} />
      <RadioController
        clearRadios={clearRadios}
        value={`un${labelToLowerCase}`}
      />
    </Wrapper>
  );
};

export default RadioGroup;
