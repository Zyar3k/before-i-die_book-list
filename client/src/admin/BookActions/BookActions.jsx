import { useContext, useEffect, useState, forwardRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { inputLabels, readAvaLabel, starsLabels } from "../../vars/vars";
import {
  Box,
  Typography,
  Stack,
  FormControl,
  FormLabel,
  FormGroup,
  Alert,
  Divider,
  Snackbar,
} from "@mui/material";
import { TextField, Checkbox, DialogComponent, ActionButton, Stars } from "..";
import request from "../../helpers/request";

import { GlobalContext } from "../../context/GlobalProvider";

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

const BookActions = () => {
  const { token, books, fetchData, isAdmin } = useContext(GlobalContext);
  const [book, setBook] = useState({
    author: {
      name: "",
      lastName: "",
    },
    title: "",
    list: [],
    page: 0,
    link: "",
    readed: false,
    available: false,
    desc: "",
    adminRating: 0,
    rating: 0,
  });
  const [deleteAccept, setDeleteAccept] = useState(false);
  const [open, setOpen] = useState(false);
  const [freeze, setFreeze] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleDelete = async () => {
    await request.delete(`/admin/books/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setDeleteAccept(false);
    fetchData();
    navigate("/admin/books");
  };

  const oneBack = () => navigate(-1);
  const del = () => setDeleteAccept(true);
  const cancelDel = () => setDeleteAccept(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adminValue = book.adminRating.$numberDecimal;
    const ratingValue = book.rating.$numberDecimal;
    const adminRating = { $numberDecimal: String(adminValue) };
    const rating = { $numberDecimal: String(ratingValue) };
    const editedBook = {
      title: book.title,
      author: { name: book.author.name, lastName: book.author.lastName },
      page: book.page,
      list: book.list,
      desc: book.desc,
      link: book.link,
      readed: book.readed,
      available: book.available,
      adminRating,
      rating,
    };

    try {
      const response = await request.patch(`/admin/books/${id}`, editedBook, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchData();
      if (response.status === 200) {
        setOpen(true);
        setFreeze(true);
        setTimeout(() => {
          navigate("/admin/books");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const selectedBook = books.find((book) => book._id === id);

    setBook(selectedBook);
  }, [books, id]);

  useEffect(() => {
    if (!isAdmin) window.location.href = "/";
  }, [isAdmin]);

  return (
    <>
      {isAdmin && (
        <Stack mt={2} style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" mb={2}>
            Edit book
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            style={{ width: "100%" }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {inputLabels.map((label, index) => (
                <TextField
                  label={label}
                  book={book}
                  setBook={setBook}
                  key={index}
                />
              ))}
            </Box>
            <FormControl margin="dense">
              <FormLabel>Info</FormLabel>
              <FormGroup row>
                {readAvaLabel.map((label, index) => (
                  <Checkbox
                    label={label}
                    setBook={setBook}
                    book={book}
                    key={index}
                  />
                ))}
              </FormGroup>
            </FormControl>
            <Divider />
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              m={2}
            >
              {starsLabels.map((label, index) => (
                <Stars
                  label={label}
                  book={book}
                  setBook={setBook}
                  key={index}
                />
              ))}
            </Stack>
            <Divider />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              m={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ActionButton freeze={freeze} text="Save" />
              <ActionButton freeze={freeze} text="Back" onClick={oneBack} />
              <ActionButton text="Delete" freeze={freeze} onClick={del} />
              <DialogComponent
                deleteAccept={deleteAccept}
                cancelDel={cancelDel}
                handleDelete={handleDelete}
              />
            </Stack>
          </Box>

          <Snackbar open={open} autoHideDuration={1800} onClose={handleClose}>
            <SnackbarAlert onClose={handleClose} severity="success">
              The book has been saved
            </SnackbarAlert>
          </Snackbar>
        </Stack>
      )}
    </>
  );
};

export default BookActions;
