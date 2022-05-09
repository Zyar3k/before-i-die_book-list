import {
  Box,
  FormControl,
  FormGroup,
  Tooltip,
  IconButton,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useContext } from "react";

import { GlobalContext } from "../../context/GlobalProvider";
import { RadioGroup } from "../../common";
import { readAvaLabel } from "../../vars/vars";

const Filter = () => {
  const { filter, clearFilter } = useContext(GlobalContext);

  const handleOnChange = (e) => filter(e.target);
  const handleRefresh = () => clearFilter();

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
            <RadioGroup handleOnChange={handleOnChange} label={label} />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default Filter;
