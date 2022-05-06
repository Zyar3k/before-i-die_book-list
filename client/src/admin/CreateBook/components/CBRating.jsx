import { Rating, FormLabel, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const CBRating = ({ newBook, setNewBook, label }) => {
  const check = label.length > 4;
  let setByLabel;
  if (check) {
    setByLabel = "adminRating";
  } else {
    setByLabel = "rating";
  }
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
        value={newBook ? newBook[setByLabel] : 0}
        onChange={(e, newValue) =>
          setNewBook({ ...newBook, [setByLabel]: parseInt(newValue) })
        }
        icon={<StarIcon fontSize="large" color="primary" />}
        emptyIcon={<StarBorderIcon fontSize="large" />}
      />
    </Box>
  );
};

export default CBRating;
