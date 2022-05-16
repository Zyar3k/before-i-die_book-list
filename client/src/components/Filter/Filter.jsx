import { useContext } from "react";
import {
  Box,
  FormControl,
  FormGroup,
  Tooltip,
  IconButton,
} from "@mui/material";
import { HighlightOffIcon } from "../../helpers/iconsImport";
import { RadioGroup } from "../../common";
import { readAvaLabel } from "../../vars/vars";

import { GlobalContext } from "../../context/GlobalProvider";

const Filter = () => {
  const { filter, clearFilter, filters } = useContext(GlobalContext);

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
            marginLeft: "8px",
          }}
        >
          {readAvaLabel.map((label, index) => (
            <RadioGroup
              key={index}
              handleOnChange={handleOnChange}
              label={label}
            />
          ))}
          {filters.length > 0 && (
            <Tooltip title="Clear filters">
              <IconButton color="error" onClick={handleRefresh}>
                <HighlightOffIcon fontSize="120px" />
              </IconButton>
            </Tooltip>
          )}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default Filter;
