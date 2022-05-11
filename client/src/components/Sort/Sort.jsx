import { useContext } from "react";
import { Box, Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";

import { sortArray } from "../../vars/vars";

import { GlobalContext } from "../../context/GlobalProvider";

// const sortArray = [
//   {
//     icon: <MenuBookTwoToneIcon />,
//     sortBy: "page",
//     name: "Ilość stron",
//   },
//   {
//     icon: <PermIdentityTwoToneIcon />,
//     sortBy: "lastName",
//     name: "Nazwisko autora",
//   },
//   {
//     icon: <StarTwoToneIcon />,
//     sortBy: "rating",
//     name: "Ranking",
//   },
// ];

const Sort = () => {
  const { sortBooks } = useContext(GlobalContext);
  const handleChange = (e) => sortBooks(e);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {sortArray.map((item) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button onClick={() => handleChange(`${item.sortBy}Up`)}>
            <KeyboardArrowUpIcon />
          </Button>
          {item.icon}
          <Button onClick={() => handleChange(`${item.sortBy}Down`)}>
            <KeyboardArrowDownIcon />
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default Sort;
