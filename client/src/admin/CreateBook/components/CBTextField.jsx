import { TextField } from "@mui/material";

const CBTextField = ({ label, newBook, setNewBook }) => {
  const labelLower = label.charAt(0).toLowerCase() + label.slice(1);

  const handleChange = (event) => {
    setNewBook({ ...newBook, [labelLower]: event.target.value });
  };

  const required = labelLower === "desc" ? false : true;
  const width = labelLower === "desc" ? "100%" : "400px";

  return (
    <TextField
      required={required}
      label={label}
      variant="outlined"
      sx={{ m: "4px", width: width }}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={handleChange}
    />
  );
};

export default CBTextField;
