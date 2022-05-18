import { Rating, FormLabel, Box } from "@mui/material";
import { StarBorderIcon, StarIcon } from "../../../helpers/iconsImport";

const StarsRating = ({ book, setBook, label }) => {
  const check = label.length > 4;
  let setByLabel;
  if (check) {
    setByLabel = "adminRating";
  } else {
    setByLabel = "rating";
  }

  const toNumber = parseFloat(book[setByLabel].$numberDecimal);
  const value = book ? toNumber : 0;

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
          setBook({ ...book, [setByLabel]: { $numberDecimal: newValue } })
        }
        icon={<StarIcon fontSize="large" color="primary" />}
        emptyIcon={<StarBorderIcon fontSize="large" />}
        precision={0.5}
      />
    </Box>
  );
};

export default StarsRating;
