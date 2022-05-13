import { useState, forwardRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import request from "../../helpers/request";
import {
  Stack,
  Box,
  Typography,
  FormControl,
  FormLabel,
  FormGroup,
  Divider,
  Alert,
  Snackbar,
} from "@mui/material";
import { inputLabels, readAvaLabel, starsLabels } from "../../vars/vars";

import { GlobalContext } from "../../context/GlobalProvider";
import { Button, Checkbox, TextField, Stars } from "../../common";

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

const CreateBook = () => {
  const [open, setOpen] = useState(false);
  const [freeze, setFreeze] = useState(false);
  const { isAdmin, createBook } = useContext(GlobalContext);

  const navigate = useNavigate();

  const [book, setBook] = useState({
    author: {
      name: "",
      lastName: "",
    },
    _id: "",
    title: "",

    list: [],
    page: 0,
    link: "",
    readed: false,
    available: false,
    desc: "",
    createdBy: "",
    adminRating: 0,
    rating: 0,
    createdAt: "",
    updatedAt: "",
    __v: 0,
  });
  console.log(book);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const oneBack = () => navigate(-1);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      title,
      author: { name, lastName },
      page,
      list,
      desc,
      link,
      readed,
      available,
      adminRating,
      rating,
    } = book;
    const prepareList = list.split(",");
    const createdBook = {
      title,
      author: { name, lastName },
      page,
      list: prepareList,
      desc,
      link,
      readed,
      available,
      adminRating,
      rating,
    };

    try {
      await createBook(createdBook);
      setTimeout(() => {
        navigate("/admin/books");
      }, 2000);
      setFreeze(true);
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!isAdmin) window.location.href = "/";
  }, []);

  return (
    <>
      <Stack mt={2} style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6" mb={2}>
          Add book
        </Typography>

        <Box component="form" onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Stack mb={1}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {inputLabels.map((label, index) => (
                <TextField
                  key={index}
                  label={label}
                  book={book}
                  setBook={setBook}
                />
              ))}
            </Box>

            <FormControl margin="dense">
              <FormLabel>Info</FormLabel>
              <FormGroup row>
                {readAvaLabel.map((label, index) => (
                  <Checkbox
                    key={index}
                    label={label}
                    book={book}
                    setBook={setBook}
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
                  key={index}
                  label={label}
                  book={book}
                  setBook={setBook}
                />
              ))}
            </Stack>
          </Stack>
          <Divider />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            m={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button freeze={freeze} text="Add" />
            <Button freeze={freeze} text="Back" onClick={oneBack} />
          </Stack>
        </Box>

        <Snackbar open={open} autoHideDuration={1800} onClose={handleClose}>
          <SnackbarAlert onClose={handleClose} severity="success">
            Book added
          </SnackbarAlert>
        </Snackbar>
      </Stack>
    </>
  );
};

export default CreateBook;
