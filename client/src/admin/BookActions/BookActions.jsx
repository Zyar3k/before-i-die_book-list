import { useContext, useEffect, useState, forwardRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import request from "../../helpers/request";
import {
  Box,
  Typography,
  Button,
  Stack,
  FormControl,
  FormLabel,
  FormGroup,
  Alert,
  Divider,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import BATextField from "./components/BATextField";
import BACheckbox from "./components/BACheckbox";
import BARating from "./components/BARating";
import BAActionButton from "./components/BAActionButton";

import { GlobalContext } from "../../context/GlobalProvider";

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

const BookActions = () => {
  const { token, books, fetchData, isAdmin } = useContext(GlobalContext);
  const [book, setBook] = useState();
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

    const editedBook = {
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
  }, []);

  const inputLabels = [
    "Title",
    "Link",
    "Name",
    "LastName",
    "Page",
    "List",
    "Desc",
  ];
  const checkboxLabels = ["Readed", "Available"];
  const starsLabels = ["Admin rank", "Rank"];

  return (
    <>
      {isAdmin && (
        <Stack mt={2} style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" mb={2}>
            Edit book
          </Typography>
          {book && (
            <Box
              component="form"
              onSubmit={handleSubmit}
              style={{ width: "100%" }}
            >
              <Stack mb={1}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  {inputLabels.map((label) => (
                    <BATextField label={label} book={book} setBook={setBook} />
                  ))}
                </Box>

                <FormControl margin="dense">
                  <FormLabel>Info</FormLabel>
                  <FormGroup row>
                    {checkboxLabels.map((label) => (
                      <BACheckbox label={label} setBook={setBook} book={book} />
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
                  {starsLabels.map((label) => (
                    <BARating label={label} book={book} setBook={setBook} />
                  ))}
                </Stack>
              </Stack>
              <Divider />
              <Stack
                direction={{ xs: "column", sm: "row" }}
                m={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <BAActionButton freeze={freeze} text="Save" />
                <BAActionButton freeze={freeze} text="Back" onClick={oneBack} />
                <BAActionButton text="Delete" freeze={freeze} onClick={del} />

                <Dialog
                  open={deleteAccept}
                  aria-labelledby="dialog-title"
                  aria-describedby="dialog-description"
                  onClose={() => setDeleteAccept(false)}
                >
                  <DialogTitle id="dialog-title">Delete?</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="dialog-description">
                      Do you want to delete an item? The change will be
                      irreversible.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setDeleteAccept(false)}>
                      Cofnij
                    </Button>
                    <Button autoFocus onClick={handleDelete}>
                      Confirm
                    </Button>
                  </DialogActions>
                </Dialog>
              </Stack>
            </Box>
          )}
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
