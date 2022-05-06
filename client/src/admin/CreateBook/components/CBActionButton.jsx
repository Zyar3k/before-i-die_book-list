import { Button } from "@mui/material";

const CBActionButton = ({ text, freeze, onClick }) => {
  let newColor;
  let newType;
  if (text === "Save" || text === "Add") {
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

export default CBActionButton;
