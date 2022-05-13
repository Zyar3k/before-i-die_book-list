import { TextField } from "@mui/material";

const BookTextField = ({ book, setBook, label }) => {
  const labelLower = label.charAt(0).toLowerCase() + label.slice(1);
  const required = labelLower === "desc" ? false : true;
  const width = labelLower === "desc" ? "100%" : "400px";
  let value = book.author[labelLower] || book[labelLower] || "";

  const handleOnChange = (e) => {
    if (labelLower === "name" || labelLower === "lastName") {
      setBook({
        ...book,
        author: { ...book.author, [labelLower]: e.target.value },
      });
    } else {
      setBook({ ...book, [labelLower]: e.target.value });
    }
  };

  return (
    <TextField
      required={required}
      label={label}
      variant="outlined"
      sx={{ m: "4px", width: width }}
      InputLabelProps={{
        shrink: true,
      }}
      value={value}
      onChange={handleOnChange}
    />
  );
};

export default BookTextField;
