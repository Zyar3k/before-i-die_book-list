import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./Header.scss";

import { GlobalContext } from "../../context/GlobalProvider";

const Header = () => {
  const { isAdmin, setIsAdmin } = useContext(GlobalContext);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => setIsOpenMenu(!isOpenMenu);
  const closeMenu = () => setIsOpenMenu(false);
  return (
    <header className="header">
      <Container maxWidth="xl" className="container">
        <div className="logo">
          {/* <NavLink to="/">LOGO</NavLink> */}
          <button onClick={() => setIsAdmin(!isAdmin)}>LOGO</button>
        </div>
        <nav className="nav">
          <section className={isOpenMenu ? "links active" : "links"}>
            <NavLink onClick={closeMenu} to="/">
              Books
            </NavLink>
            <NavLink onClick={closeMenu} to="/statistic">
              Statistic
            </NavLink>
            {isAdmin && (
              <>
                <NavLink onClick={closeMenu} to="/admin/books">
                  Dashboard
                </NavLink>
                <NavLink onClick={closeMenu} to="/admin/statistic">
                  Admin Stats
                </NavLink>
                <NavLink onClick={closeMenu} to="/admin/books/create">
                  Create
                </NavLink>
              </>
            )}

            <NavLink onClick={closeMenu} to="/admin/auth/login">
              Login
            </NavLink>
          </section>
        </nav>
        <button className="mobileIcons" onClick={toggleMenu}>
          {isOpenMenu ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>
    </header>
  );
};

export default Header;
