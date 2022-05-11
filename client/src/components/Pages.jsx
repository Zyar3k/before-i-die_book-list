import { Routes, Route, useLocation } from "react-router-dom";
import { BookDetails, Home, Statistic } from "../views/index";
import {
  AdminStats,
  BookActions,
  CreateBook,
  Login,
  Dashboard,
} from "../admin/index";
import { Container } from "@mui/material";
import bgd from "../assets/1600x900.png";
import { useEffect } from "react";

const Pages = () => {
  const location = useLocation();
  const path = location.pathname.slice(1, 6);

  useEffect(() => {
    if (path === "admin") {
      document.body.style.backgroundImage = "none";
    } else {
      document.body.style.backgroundImage = `url(${bgd})`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundAttachment = "fixed";
    }
  }, [path]);
  return (
    <Container maxWidth="xl">
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/:id" element={<BookDetails />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/admin/books" element={<Dashboard />} exact={true} />
        <Route path="/admin/statistic" element={<AdminStats />} />
        <Route path="/admin/books/:id" element={<BookActions />} />
        <Route path="/admin/books/create" element={<CreateBook />} />
        <Route path="/admin/auth/login" element={<Login />} />
      </Routes>
    </Container>
  );
};

export default Pages;
