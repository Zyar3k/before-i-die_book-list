import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { SearchUser, FilterUser, SortUser } from "../../common/user_option";
import { SidebarInfo } from "../../common/";
import { ExpandLessIcon, ExpandMoreIcon } from "../../helpers/iconsImport";

import "./Sidebar.scss";
import { Tooltip } from "@mui/material";

const Sidebar = () => {
  const [more, setMore] = useState(false);

  return (
    <aside>
      <SearchUser />
      <Tooltip title="Więcej" placement="left">
        <IconButton
          sx={{
            color: "white",
          }}
          onClick={() => setMore(!more)}
          aria-label="delete"
        >
          {more ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Tooltip>
      {more ? (
        <>
          <FilterUser />
          <SortUser />
        </>
      ) : (
        <SidebarInfo />
      )}
    </aside>
  );
};

export default Sidebar;
