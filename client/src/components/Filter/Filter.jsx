import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormGroup,
  RadioGroup,
  Radio,
  Tooltip,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useState, useContext } from "react";

import { GlobalContext } from "../../context/GlobalProvider";

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
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <FormControl>
        <FormGroup row>
          <Tooltip title="All">
            <IconButton
              aria-label="refresh"
              color="success"
              onClick={handleRefresh}
              sx={{ marginRight: "8px" }}
            >
              <RefreshIcon fontSize="120px" />
            </IconButton>
          </Tooltip>
          <RadioGroup
            name="reading-options"
            aria-labelledby="sort-options-label"
            onChange={handleOnChange}
            row
          >
            <FormControlLabel
              value="readed"
              control={<Radio size="small" checked={clearRadios} />}
              label="Readed"
            />

            <FormControlLabel
              value="unreaded"
              control={<Radio size="small" checked={clearRadios} />}
              label="Unreaded"
            />
          </RadioGroup>
          <RadioGroup
            name="sort-options"
            aria-labelledby="sort-options-label"
            onChange={handleOnChange}
            row
          >
            <FormControlLabel
              value="available"
              control={<Radio size="small" checked={clearRadios} />}
              label="Available"
            />

            <FormControlLabel
              value="unavailable"
              control={<Radio size="small" checked={clearRadios} />}
              label="Unavailable"
            />
          </RadioGroup>
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default Filter;
