import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useLocation } from "react-router-dom";

const BookTextField = ({ book, setBook, label }) => {
  const location = useLocation();
  const [isEditMode, setIsEditMode] = useState(false);
  const path = location.pathname.slice(-6);
  const labelLower = label.charAt(0).toLowerCase() + label.slice(1);
  const required = labelLower === "desc" ? false : true;
  const width = labelLower === "desc" ? "100%" : "400px";
  let value;

  if (isEditMode) {
    if (labelLower === "name" || labelLower === "lastName") {
      value = book.author[labelLower];
    } else {
      value = book[labelLower];
    }
  } else {
    if (labelLower !== "name" || labelLower !== "lastName") {
      value = book[labelLower];
    } else {
      value = book.author[labelLower];
    }
  }

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

  useEffect(() => {
    if (path === "create") {
      setIsEditMode(false);
    } else {
      setIsEditMode(true);
    }
  }, [path]);

  return (
    <TextField
      required={required}
      label={label}
      variant="outlined"
      sx={{ m: "4px", width: width }}
      InputLabelProps={{
        shrink: true,
      }}
      value={book ? value : ""}
      onChange={handleOnChange}
    />
  );
};

export default BookTextField;
