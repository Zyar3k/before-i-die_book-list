import { FormControlLabel, Checkbox } from "@mui/material";

const BookCheckbox = ({ label, setBook, book }) => {
  const labelLower = label.charAt(0).toLowerCase() + label.slice(1);

  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          type="checkbox"
          checked={book ? book[labelLower] : false}
          onChange={(e) => setBook({ ...book, [labelLower]: e.target.checked })}
        />
      }
    />
  );
};

export default BookCheckbox;
