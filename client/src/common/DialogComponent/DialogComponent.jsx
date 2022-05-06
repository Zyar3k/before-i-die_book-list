import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions,
} from "@mui/material";

const DialogComponent = ({ deleteAccept, cancelDel, handleDelete }) => {
  return (
    <Dialog
      open={deleteAccept}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      onClose={cancelDel}
    >
      <DialogTitle id="dialog-title">Delete?</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description">
          Do you want to delete an item? The change will be irreversible.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={cancelDel}>Cancel</Button>
        <Button autoFocus onClick={handleDelete}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
