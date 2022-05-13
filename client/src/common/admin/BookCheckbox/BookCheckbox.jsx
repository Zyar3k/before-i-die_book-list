import { FormControlLabel, Checkbox } from "@mui/material";

const BookCheckbox = ({ label, setBook, book }) => {
  const labelLower = label.charAt(0).toLowerCase() + label.slice(1);
  let checked;
  checked = book ? book[labelLower] : false;
  return (
    <>
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            type="checkbox"
            checked={checked}
            onChange={(e) =>
              setBook({ ...book, [labelLower]: e.target.checked })
            }
          />
        }
      />
    </>
  );
};

export default BookCheckbox;
