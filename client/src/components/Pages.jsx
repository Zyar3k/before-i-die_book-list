import { Routes, Route } from "react-router-dom";
import { BookDetails, Home, Statistic } from "../views/index";
import {
  AdminStats,
  BookActions,
  CreateBook,
  Login,
  Dashboard,
} from "../admin/index";
import { Container } from "@mui/material";

const Pages = () => {
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
