import { RadioGroup as Wrapper } from "@mui/material";
import RadioController from "../RadioController/RadioController";

const RadioGroup = ({ handleOnChange, label }) => {
  const labelToLowerCase = label.toLowerCase();
  return (
    <Wrapper row name={`${label}-options`} onChange={handleOnChange}>
      <RadioController value={labelToLowerCase} />
      <RadioController value={`un${labelToLowerCase}`} />
    </Wrapper>
  );
};

export default RadioGroup;
