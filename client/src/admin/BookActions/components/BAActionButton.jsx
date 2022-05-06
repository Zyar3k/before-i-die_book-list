import { Button } from "@mui/material";

const BAActionButton = ({ text, freeze, onClick }) => {
  let newColor;
  let newType;
  if (text === "Save") {
    newColor = "success";
    newType = "submit";
  } else if (text === "Back") {
    newColor = "warning";
    newType = "button";
  } else {
    newColor = "error";
    newType = "button";
  }

  return (
    <Button
      type={newType}
      variant="contained"
      color={newColor}
      sx={{ margin: "4px" }}
      disabled={freeze}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default BAActionButton;
