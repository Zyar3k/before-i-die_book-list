import { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import { CloseIcon, MenuIcon } from "../../helpers/iconsImport";

import { GlobalContext } from "../../context/GlobalProvider";

import "./Header.scss";

const Header = () => {
  const { isAdmin, setIsAdmin, myStorage } = useContext(GlobalContext);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isAdminPath, setIsAdminPath] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.slice(1, 6);
  const toggleMenu = () => setIsOpenMenu(!isOpenMenu);
  const closeMenu = () => setIsOpenMenu(false);

  const logout = () => {
    setIsAdmin(false);
    myStorage.removeItem("adminToken");
    navigate("/");
    closeMenu();
  };
  useEffect(() => {
    if (path === "admin") {
      setIsAdminPath(true);
    } else {
      setIsAdminPath(false);
    }
  }, [path]);

  return (
    <header className={isAdminPath ? "header" : "header user"}>
      <Container maxWidth="xl" className="container">
        <div className="logo">
          <NavLink to="/">
            <h1>before I die</h1>
          </NavLink>
          {/* <button onClick={() => setIsAdmin(!isAdmin)}>LOGO</button> */}
        </div>
        <nav className={isAdminPath ? "nav" : "nav user"}>
          <section className={isOpenMenu ? "links active" : "links"}>
            {isAdmin ? (
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
            ) : (
              <>
                <NavLink onClick={closeMenu} to="/">
                  Books
                </NavLink>
                <NavLink onClick={closeMenu} to="/statistic">
                  Statistic
                </NavLink>
              </>
            )}
            {isAdmin ? (
              <NavLink className="adminNavLink" onClick={logout} to="/">
                Logout
              </NavLink>
            ) : (
              <NavLink
                className="adminNavLink"
                onClick={closeMenu}
                to="/admin/auth/login"
              >
                Login
              </NavLink>
            )}
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
