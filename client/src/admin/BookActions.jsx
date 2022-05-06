import { useContext, useEffect, useState, forwardRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import request from "../helpers/request";
import {
  Box,
  Typography,
  Button,
  Stack,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  TextField,
  Alert,
  Divider,
  Rating,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { GlobalContext } from "../context/GlobalProvider";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editedBook = {
      title: book.title,
      name: book.author.name,
      lastName: book.author.lastName,
      page: book.page,
      list: book.list,
      desc: book.desc,
      link: book.link,

      readed: book.readed,
      available: book.available,

      adminRating: book.adminRating,
      rating: book.rating,
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

  return (
    <>
      {isAdmin && (
        <Stack mt={2} style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" mb={2}>
            Edytuj książkę
          </Typography>
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
                <TextField
                  required={true}
                  label="Tytuł"
                  variant="outlined"
                  sx={{ m: "4px", width: "400px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={book ? book.title : ""}
                  onChange={(e) => setBook({ ...book, title: e.target.value })}
                />
                <TextField
                  required={true}
                  label="Link do opisu"
                  variant="outlined"
                  sx={{ m: "4px", width: "400px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={book ? book.link : ""}
                  onChange={(e) => setBook({ ...book, link: e.target.value })}
                />
                <TextField
                  required={true}
                  label="Imię autora"
                  variant="outlined"
                  sx={{ m: "4px", width: "400px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={book ? book.author.name : ""}
                  onChange={(e) =>
                    setBook({
                      ...book,
                      author: { ...book.author, name: e.target.value },
                    })
                  }
                />
                <TextField
                  required={true}
                  label="Nazwisko autora"
                  variant="outlined"
                  sx={{ m: "4px", width: "400px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={book ? book.author.lastName : ""}
                  onChange={(e) =>
                    setBook({
                      ...book,
                      author: { ...book.author, lastName: e.target.value },
                    })
                  }
                />
                <TextField
                  required={true}
                  label="Ilość stron"
                  type="number"
                  variant="outlined"
                  sx={{ m: "4px", width: "400px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={book ? book.page : ""}
                  onChange={(e) =>
                    setBook({ ...book, page: parseInt(e.target.value) })
                  }
                />
                <TextField
                  required={true}
                  label="Lista"
                  variant="outlined"
                  sx={{ m: "4px", width: "400px" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={book ? book.list : ""}
                  onChange={(e) => setBook({ ...book, list: e.target.value })}
                />
                <TextField
                  label="Opis"
                  variant="outlined"
                  sx={{ m: "4px", width: "100%" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={book ? book.desc : ""}
                  onChange={(e) => setBook({ ...book, desc: e.target.value })}
                />
              </Box>

              <FormControl margin="dense">
                <FormLabel>Info</FormLabel>
                <FormGroup row>
                  <FormControlLabel
                    label="Przeczytana"
                    control={
                      <Checkbox
                        type="checkbox"
                        checked={book ? book.readed : false}
                        onChange={(e) =>
                          setBook({ ...book, readed: e.target.checked })
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    label="Dostępna"
                    control={
                      <Checkbox
                        type="checkbox"
                        checked={book ? book.available : false}
                        onChange={(e) =>
                          setBook({ ...book, available: e.target.checked })
                        }
                      />
                    }
                  />
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
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FormLabel>Ocena admina: </FormLabel>
                  <Rating
                    name="simple-controlled"
                    value={book ? book.adminRating : 0}
                    onChange={(e, newValue) =>
                      setBook({ ...book, adminRating: parseInt(newValue) })
                    }
                    icon={<StarIcon fontSize="inherit" color="primary" />}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    precision={0.5}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FormLabel>Ocena: </FormLabel>
                  <Rating
                    name="simple-controlled"
                    value={book ? book.rating : 0}
                    onChange={(e, newValue) =>
                      setBook({ ...book, rating: parseInt(newValue) })
                    }
                    icon={<StarIcon fontSize="inherit" color="primary" />}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    precision={0.5}
                  />
                </Box>
              </Stack>
            </Stack>
            <Divider />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              m={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ margin: "4px" }}
                disabled={freeze}
              >
                Zapisz
              </Button>
              <Button
                variant="contained"
                color="warning"
                sx={{ margin: "4px" }}
                onClick={() => navigate(-1)}
                disabled={freeze}
              >
                Wróć
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ margin: "4px" }}
                onClick={() => setDeleteAccept(true)}
                disabled={freeze}
              >
                Usuń
              </Button>
              <Dialog
                open={deleteAccept}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                onClose={() => setDeleteAccept(false)}
              >
                <DialogTitle id="dialog-title">Usunąć?</DialogTitle>
                <DialogContent>
                  <DialogContentText id="dialog-description">
                    Chcesz usunąć pozycję? Zmiana będzie nieodwracalna.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setDeleteAccept(false)}>Cofnij</Button>
                  <Button autoFocus onClick={handleDelete}>
                    Potwierdź
                  </Button>
                </DialogActions>
              </Dialog>
            </Stack>
          </Box>
          <Snackbar open={open} autoHideDuration={1800} onClose={handleClose}>
            <SnackbarAlert onClose={handleClose} severity="success">
              Książka została zapisana
            </SnackbarAlert>
          </Snackbar>
        </Stack>
      )}
    </>
  );
};

export default BookActions;
