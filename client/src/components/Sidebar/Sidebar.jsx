import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { SearchUser, FilterUser, SortUser } from "../../common/user_option";
import { SidebarInfo } from "../../common/";
import { ExpandLessIcon, ExpandMoreIcon } from "../../helpers/iconsImport";

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
