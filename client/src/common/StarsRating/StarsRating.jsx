import { Rating, FormLabel, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const StarsRating = ({ book, setBook, label }) => {
  const check = label.length > 4;
  let setByLabel;
  if (check) {
    setByLabel = "adminRating";
  } else {
    setByLabel = "rating";
  }

  const value = book ? book[setByLabel] : 0;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <FormLabel>{label}: </FormLabel>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(e, newValue) =>
          setBook({ ...book, [setByLabel]: parseInt(newValue) })
        }
        icon={<StarIcon fontSize="large" color="primary" />}
        emptyIcon={<StarBorderIcon fontSize="large" />}
      />
    </Box>
  );
};

export default StarsRating;
