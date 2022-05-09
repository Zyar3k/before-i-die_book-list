import {
  Box,
  FormControl,
  FormGroup,
  Tooltip,
  IconButton,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useState, useContext } from "react";

import { GlobalContext } from "../../context/GlobalProvider";
import { RadioGroup } from "../../common";
import { readAvaLabel } from "../../vars/vars";

const Filter = () => {
  const { filter, clearFilter } = useContext(GlobalContext);
  const [clearRadios, setClearRadios] = useState();

  const handleOnChange = (e) => {
    setClearRadios();
    filter(e.target);
  };

  const handleRefresh = () => {
    clearFilter();
    setClearRadios(null);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "space-around",
        justifyContent: "center",
      }}
    >
      <FormControl>
        <FormGroup
          row
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Tooltip title="All">
            <IconButton
              color="success"
              onClick={handleRefresh}
              sx={{ marginRight: "8px" }}
            >
              <RefreshIcon fontSize="120px" />
            </IconButton>
          </Tooltip>
          {readAvaLabel.map((label) => (
            <RadioGroup
              handleOnChange={handleOnChange}
              clearRadios={clearRadios}
              label={label}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default Filter;
