import { FormControlLabel, Checkbox } from "@mui/material";

const CBCheckbox = ({ label, setNewBook, newBook }) => {
  const labelLower = label.charAt(0).toLowerCase() + label.slice(1);

  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          type="checkbox"
          checked={newBook ? newBook[labelLower] : false}
          onChange={(e) =>
            setNewBook({ ...newBook, [labelLower]: e.target.checked })
          }
        />
      }
    />
  );
};

export default CBCheckbox;
