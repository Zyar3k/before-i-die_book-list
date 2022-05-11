import { useState } from "react";
import {
  SearchUser,
  FilterUser,
  SortUser,
} from "../../common/user/user_option";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import IconButton from "@mui/material/IconButton";

import "./Sidebar.scss";

const Sidebar = () => {
  const [more, setMore] = useState(false);

  return (
    <aside>
      <SearchUser />
      <IconButton
        sx={{
          color: "white",
        }}
        onClick={() => setMore(!more)}
        aria-label="delete"
      >
        {more ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      {more && (
        <>
          <FilterUser />
          <SortUser />
        </>
      )}
    </aside>
  );
};

export default Sidebar;
