import { useContext, useEffect, useState } from "react";
import { TextField, Box, Tooltip } from "@mui/material";

import { GlobalContext } from "../../context/GlobalProvider";

const Search = () => {
  const { searchBook, clearSearch } = useContext(GlobalContext);
  const [searchValue, setSearchValue] = useState("");

  const handleClick = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue !== "") {
      searchBook(searchValue);
    } else {
      clearSearch();
    }
  }, [searchValue]);

  return (
    <Box
      margin={1}
      marginTop={2}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tooltip title="Search by title or author">
        <TextField
          label="Search"
          size="small"
          type="search"
          sx={{
            m: "4px",
            width: "240px",
          }}
          onChange={handleClick}
        />
      </Tooltip>
    </Box>
  );
};

export default Search;
